import { Card } from '@/components/ui/card';

export default function Loading() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Card className="rounded-lg border border-border p-8 animate-pulse">
            <div className="h-6 w-48 rounded bg-muted" />
            <div className="mt-4 h-4 w-72 rounded bg-muted" />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="h-40 rounded bg-muted" />
              <div className="h-40 rounded bg-muted" />
              <div className="h-40 rounded bg-muted" />
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
