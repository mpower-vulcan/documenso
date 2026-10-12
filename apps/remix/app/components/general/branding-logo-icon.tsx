import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

// SignCoach: the icon tile in place of the Documenso icon (used in the mobile header).
// The artwork lives in public/static/signcoach-icon.png.
export const BrandingLogoIcon = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 84" {...props}>
      <image href="/static/signcoach-icon.png?v=20261012b" width="84" height="84" />
    </svg>
  );
};
