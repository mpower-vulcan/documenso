import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

// SignCoach: our lockup in place of the Documenso wordmark. The artwork lives in
// public/static/signcoach-lockup.png (full-resolution PNG; the SVG export's icon is a flat tracing), so a brand change is a file swap rather than a code change.
// Kept as an <svg> wrapper so every existing caller's sizing classes keep working.
export const BrandingLogo = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1558 300" {...props}>
      <image href="/static/signcoach-lockup.png?v=20261012c" width="1558" height="300" />
    </svg>
  );
};
