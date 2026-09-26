import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';
import { i18n, type MessageDescriptor } from '@lingui/core';

import { BRAND_DESCRIPTION, BRAND_NAME, BRAND_TITLE } from './brand';

// MPower fork: brand naming instead of Documenso's marketing copy, and noindex, because a private
// signing instance has no business appearing in search results.
export const appMetaTags = (title?: MessageDescriptor) => {
  const description = BRAND_DESCRIPTION;

  return [
    {
      title: title ? `${i18n._(title)} - ${BRAND_NAME}` : BRAND_NAME,
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'author',
      content: BRAND_NAME,
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
    {
      property: 'og:title',
      content: BRAND_TITLE,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
