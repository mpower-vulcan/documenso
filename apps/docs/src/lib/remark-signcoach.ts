// remark plugin: present the upstream Documenso docs as SignCoach docs at build time.
//
// Why a plugin and not 120 hand edits: the content is upstream's and keeps changing. Rewriting at
// build time keeps our fork mergeable; pages where our behaviour actually differs are edited by hand
// (see the SignCoach section and the fork changelog rule: every app change reviews the docs).
//
// What it does, in text nodes only (never inside code blocks or inline code):
//   "Documenso"            -> "SignCoach"   (except pages under content/docs/users/signcoach/)
//   app.documenso.com      -> the SignCoach app URL (also in link and image URLs and in code, since API
//                             examples must point at our instance)
//   docs.documenso.com/... -> relative docs links
//   documenso.com/terms|privacy -> the app's Legal page
import type { Root } from 'mdast';

import { APP_URL, BRAND_NAME, LEGAL_URL } from './brand';

type AnyNode = { type: string; value?: string; url?: string; children?: AnyNode[]; data?: Record<string, unknown> };

const SKIP = new Set(['code', 'inlineCode', 'mdxjsEsm']);

function rewriteUrl(url: string): string {
  return url
    .replace(/https?:\/\/app\.documenso\.com/g, APP_URL)
    .replace(/https?:\/\/docs\.documenso\.com\/docs/g, '/docs')
    .replace(/https?:\/\/docs\.documenso\.com/g, '/docs')
    .replace(/https?:\/\/(www\.)?documenso\.com\/(terms|privacy)[^\s)]*/g, LEGAL_URL);
}

function rewriteText(text: string): string {
  return rewriteUrl(text).replace(/\bDocumenso\b/g, BRAND_NAME);
}

export function remarkSignCoach() {
  return (tree: Root, file: unknown) => {
    // Pages that must keep the upstream name (the open-source notice) opt out by path: anything under
    // users/signcoach/. Frontmatter is not exposed to remark plugins in this pipeline.
    const f = file as { path?: string; history?: string[] };
    const where = (f.path ?? f.history?.[0] ?? '').split('\\').join('/');
    const keepName = where.includes('/users/signcoach/');
    const walk = (node: AnyNode) => {
      if (node.type === 'code' || node.type === 'inlineCode') {
        // code keeps the product name but must hit our instance, not app.documenso.com
        if (typeof node.value === 'string') node.value = rewriteUrl(node.value);
        return;
      }
      if (SKIP.has(node.type)) return;
      if (typeof node.url === 'string') node.url = rewriteUrl(node.url);
      if (node.type === 'text' && typeof node.value === 'string') {
        node.value = keepName ? rewriteUrl(node.value) : rewriteText(node.value);
      }
      if (node.children) for (const c of node.children) walk(c);
    };
    walk(tree as unknown as AnyNode);
  };
}
