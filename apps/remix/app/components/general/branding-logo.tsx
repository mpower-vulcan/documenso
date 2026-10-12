import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

// SignCoach: our lockup in place of the Documenso wordmark. Full-resolution PNGs (the SVG export's
// icon is a flat tracing), one for light and one for dark backgrounds, switched by the app's dark
// class. Kept as an <svg> wrapper so every existing caller's sizing classes keep working.
export const BrandingLogo = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1558 300" {...props}>
      <image className="dark:hidden" href="/static/signcoach-lockup.png?v=20261012d" width="1558" height="300" />
      <image className="hidden dark:block" href="/static/signcoach-lockup-dark.png?v=20261012d" width="1558" height="300" />
    </svg>
  );
};
