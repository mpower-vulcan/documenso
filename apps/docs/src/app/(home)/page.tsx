import { CodeIcon, FileTextIcon, ShieldCheckIcon, UserIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { APP_URL, BRAND_BY, BRAND_NAME } from '@/lib/brand';

export const metadata: Metadata = {
  title: `${BRAND_NAME} Docs`,
  description: `How to send, sign and manage documents with ${BRAND_NAME} ${BRAND_BY}.`,
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-16 pt-6 text-center">
        <h1 className="mb-4 font-bold text-4xl tracking-tight">{BRAND_NAME} Documentation</h1>
        <p className="mx-auto mb-8 max-w-2xl text-fd-muted-foreground text-lg">
          Send documents for signature, build templates, manage your organisation, and connect {BRAND_NAME} to your
          own systems through the API and webhooks.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/docs/users"
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 font-medium text-fd-primary-foreground text-sm transition-colors hover:bg-fd-primary/90"
          >
            User guide
          </Link>
          <a
            href={APP_URL}
            className="inline-flex items-center gap-2 rounded-lg border bg-fd-background px-5 py-2.5 font-medium text-sm transition-colors hover:bg-fd-accent"
          >
            Open {BRAND_NAME}
          </a>
        </div>
      </div>

      <div className="mb-16 grid gap-4 md:grid-cols-2">
        <Link
          href="/docs/users"
          className="group relative flex flex-col rounded-xl border bg-fd-card p-6 transition-all hover:border-fd-primary/50 hover:shadow-md"
        >
          <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
            <UserIcon className="size-6" />
          </div>
          <h2 className="mb-2 font-semibold text-lg">User guide</h2>
          <p className="mb-4 flex-1 text-fd-muted-foreground text-sm">
            Send documents, create templates, and manage your organisation and team in the web app.
          </p>
          <span className="font-medium text-fd-primary text-sm">Get started</span>
        </Link>

        <Link
          href="/docs/developers"
          className="group relative flex flex-col rounded-xl border bg-fd-card p-6 transition-all hover:border-fd-primary/50 hover:shadow-md"
        >
          <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
            <CodeIcon className="size-6" />
          </div>
          <h2 className="mb-2 font-semibold text-lg">Developers</h2>
          <p className="mb-4 flex-1 text-fd-muted-foreground text-sm">
            API tokens, the REST API, webhooks and embedding, so your own systems can send and track documents.
          </p>
          <span className="font-medium text-fd-primary text-sm">Read the API docs</span>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/docs/concepts" className="flex items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-fd-accent">
          <FileTextIcon className="mt-0.5 size-5 shrink-0 text-fd-muted-foreground" />
          <div>
            <h3 className="font-medium">Concepts</h3>
            <p className="text-fd-muted-foreground text-sm">Document lifecycle, recipient roles, field types, signing certificates.</p>
          </div>
        </Link>
        <Link href="/docs/compliance" className="flex items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-fd-accent">
          <ShieldCheckIcon className="mt-0.5 size-5 shrink-0 text-fd-muted-foreground" />
          <div>
            <h3 className="font-medium">Compliance</h3>
            <p className="text-fd-muted-foreground text-sm">E-sign law, signature levels, standards and data protection.</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
