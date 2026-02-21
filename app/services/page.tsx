import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import SectionHeader from '@/components/SectionHeader';
import CTABanner from '@/components/CTABanner';

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative h-[50vh] min-h-[420px]">
        <Image
          src="/images/gallery.jpg"
          alt="Professional detailing in action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              title="Professional Detailing"
              subtitle="From quick washes to full ceramic coatings—we do it all"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title="Detailing Packages" subtitle="Choose the service that fits your vehicle" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Express Detail"
              price="$79"
              description="Perfect for maintaining your vehicle between full details"
              items={[
                'Exterior hand wash',
                'Wheel & tire cleaning',
                'Interior vacuum',
                'Dashboard wipe-down',
                'Window cleaning inside & out',
                'Air freshener',
              ]}
            />
            <ServiceCard
              title="Full Detail"
              price="$199"
              description="Our most popular package for a complete refresh"
              items={[
                'Everything in Express',
                'Clay bar treatment',
                'One-step polish',
                'Carnauba wax application',
                'Leather cleaning & conditioning',
                'Carpet shampooing',
                'Engine bay cleaning',
                'Headlight restoration',
              ]}
              popular
            />
            <ServiceCard
              title="Ceramic Coating"
              price="Starting at $599"
              description="Professional-grade protection that lasts for years"
              items={[
                'Full paint correction',
                'IronX decontamination',
                'Professional ceramic coating',
                '5-year hydrophobic protection',
                'Interior ceramic coating',
                'Wheel ceramic coating',
                'Maintenance kit included',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6">
          <CTABanner
            title="Ready to Make Your Ride Shine?"
            subtitle="Book your detailing appointment with the Bros today."
            primaryCtaLabel="Book Your Detail"
            primaryCtaHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}
