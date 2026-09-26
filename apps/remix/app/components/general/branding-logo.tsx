import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

// MPower fork: our logo in place of the Documenso wordmark. The artwork lives in
// public/static/mpower-logo.svg, so a brand change is a file swap rather than a code change.
// Kept as an <svg> wrapper so every existing caller's sizing classes keep working.
export const BrandingLogo = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 439 51.67" {...props}>
      <image href="/static/mpower-logo.svg" width="439" height="51.67" />
    </svg>
  );
};
