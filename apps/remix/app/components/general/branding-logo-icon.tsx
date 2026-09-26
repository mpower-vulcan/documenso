import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

// MPower fork: our square mark in place of the Documenso icon (used in the mobile header).
// The artwork lives in public/static/mpower-icon.png.
export const BrandingLogoIcon = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 84" {...props}>
      <image href="/static/mpower-icon.png" width="84" height="84" />
    </svg>
  );
};
