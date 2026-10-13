import { Button } from '@documenso/ui/primitives/button';
import { Link } from 'react-router';

import { BRAND_NAME, SOURCE_CODE_URL } from '~/utils/brand';

// SignCoach: the one page that carries the legal notices. The AGPL-3.0 section 13 source offer for this
// modified Documenso lives here (Steve, 2026-10-13: legal page only, not on every screen). Terms and
// privacy sections are placeholders until counsel supplies the text.
export default function Legal() {
  return (
    <div>
      <article className="prose dark:prose-invert">
        <h1>Legal</h1>

        <h2>Terms of service</h2>
        <p>
          {BRAND_NAME} is operated by MPower Vulcan LLC, Las Vegas, Nevada. Terms of service will be published here.
          Until then, use of this service is governed by the agreement between MPower Vulcan LLC and the account holder.
        </p>

        <h2>Privacy</h2>
        <p>
          Documents, signer details and audit records are stored to complete and evidence the signing process and are
          available to the account that sent the document. A full privacy notice will be published here.
        </p>

        <h2>Electronic signatures</h2>
        <p>
          Electronic signatures collected through {BRAND_NAME} are intended to be valid under the United States
          Electronic Signatures in Global and National Commerce Act and comparable laws. See the{' '}
          <Link to="/articles/signature-disclosure">electronic signature disclosure</Link>.
        </p>

        <h2>Open source</h2>
        <p>
          {BRAND_NAME} is built on Documenso, free software released under the GNU Affero General Public License,
          version 3. In line with section 13 of that license, the complete source code of this modified version is
          available at{' '}
          <a href={SOURCE_CODE_URL} target="_blank" rel="noopener noreferrer">
            {SOURCE_CODE_URL}
          </a>
          . Documenso is a trademark of its owners; {BRAND_NAME} is a product of MPower Vulcan LLC and is not affiliated
          with or endorsed by them.
        </p>
      </article>

      <div className="mt-8">
        <Button asChild>
          <Link to="/">Back home</Link>
        </Button>
      </div>
    </div>
  );
}
