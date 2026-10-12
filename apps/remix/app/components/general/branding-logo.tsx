import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

// SignCoach: our lockup in place of the Documenso wordmark. The artwork lives in
// public/static/signcoach-logo.svg, so a brand change is a file swap rather than a code change.
// Kept as an <svg> wrapper so every existing caller's sizing classes keep working.
export const BrandingLogo = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.52 145.2" {...props}>
      <image href="/static/signcoach-logo.svg" width="491.52" height="145.2" />
    </svg>
  );
};
