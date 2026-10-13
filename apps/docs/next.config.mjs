import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// SignCoach docs: static export, published to Cloudflare Pages. Upstream's legacy-path redirects and
// the llms rewrite are not needed here and are unsupported in export mode.
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default withMDX(config);
