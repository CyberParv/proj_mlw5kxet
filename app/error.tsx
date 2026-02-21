'use client';

import { Button } from '@/components/ui/button';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Something went wrong</h1>
          <p className="mt-4 text-muted-foreground">
            We hit a snag while loading this page. Please try again.
          </p>
          <div className="mt-8">
            <Button onClick={() => reset()} className="rounded-md px-8 py-4 font-bold uppercase tracking-wide">
              Try Again
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
