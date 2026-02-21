import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">404</h1>
          <p className="mt-4 text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <div className="mt-8">
            <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wide">
              <a href="/">Return Home</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
