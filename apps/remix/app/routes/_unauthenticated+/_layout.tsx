import backgroundPattern from '@documenso/assets/images/background-pattern.png';
import { Outlet } from 'react-router';

import { BrandingLogo } from '~/components/general/branding-logo';
import { DOCS_URL } from '~/utils/brand';

export default function Layout() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12 md:p-12 lg:p-24">
      <div>
        <div className="absolute -inset-[min(600px,max(400px,60vw))] -z-[1] flex items-center justify-center opacity-70">
          <img
            src={backgroundPattern}
            alt="background pattern"
            className="dark:brightness-95 dark:contrast-[70%] dark:invert dark:sepia"
            style={{
              mask: 'radial-gradient(rgba(255, 255, 255, 1) 0%, transparent 80%)',
              WebkitMask: 'radial-gradient(rgba(255, 255, 255, 1) 0%, transparent 80%)',
            }}
          />
        </div>

        {/* MPower fork: upstream shows no logo on sign-in, sign-up or password pages; ours does */}
        <BrandingLogo className="mx-auto mb-10 h-20 w-auto" />

        <div className="relative w-full">
          <Outlet />
        </div>

        <div className="flex justify-center py-3 print:hidden">
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-xs hover:underline"
          >
            Help and docs
          </a>
        </div>

      </div>
    </main>
  );
}
