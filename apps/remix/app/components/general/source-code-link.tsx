import { SOURCE_CODE_URL } from '~/utils/brand';

// MPower fork: AGPL-3.0 section 13 requires offering the source of this modified version to every
// user who interacts with it over a network, signers included. Rendered in the three top-level
// layouts, never in the internal PDF routes, and hidden when printing.
export const SourceCodeLink = () => {
  return (
    <div className="flex justify-center py-3 print:hidden">
      <a
        href={SOURCE_CODE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground text-xs hover:underline"
      >
        Source code (AGPL-3.0)
      </a>
    </div>
  );
};
