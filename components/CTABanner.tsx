import { Button } from '@/components/ui/button';

interface CTABannerProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTABanner({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel = 'Book a Test Drive',
  secondaryCtaHref = '#',
}: CTABannerProps) {
  return (
    <section className="w-full rounded-lg bg-gradient-to-r from-[#0A0A0A] via-[#111111] to-[#1a1a1a] px-6 py-12 text-white md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold uppercase md:text-3xl">{title}</h2>
          <p className="max-w-xl text-sm text-white/70 md:text-base">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="bg-[#D62828] text-white hover:bg-[#D62828]/90" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
            <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
