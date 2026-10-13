import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import { APP_URL, BRAND_NAME } from '@/lib/brand';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold">
          <img src="/logo.png" alt={BRAND_NAME} className="h-7 w-auto dark:hidden" />
          <img src="/logo-dark.png" alt={BRAND_NAME} className="hidden h-7 w-auto dark:block" />
        </span>
      ),
    },
    links: [
      {
        text: 'Open the app',
        url: APP_URL,
        external: true,
      },
    ],
  };
}
