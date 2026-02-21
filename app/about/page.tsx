import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import TeamMemberCard from '@/components/TeamMemberCard';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative h-[50vh] min-h-[420px]">
        <Image
          src="/images/about.jpg"
          alt="Detailing Bros founders"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              title="The Bros Behind the Brand"
              subtitle="Family values. Professional results."
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title="Our Story" subtitle="From driveway details to a 15,000 sq ft facility" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                In 2009, brothers Mike and Danny Torres started detailing cars in their parents&apos;
                driveway in Charlotte. What began as a way to make extra cash during college quickly
                became a passion. By 2012, they opened their first small shop.
              </p>
              <p>
                Today, Detailing Bros operates a 15,000 sq ft facility with a full sales floor,
                detailing bay, and a team of 12 dedicated professionals. But one thing hasn&apos;t
                changed: every customer is treated like family.
              </p>
            </div>
            <Card className="rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold">Milestones</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>2009 — Started detailing in parents&apos; driveway</li>
                <li>2012 — Opened first detailing shop</li>
                <li>2016 — Expanded into pre-owned vehicle sales</li>
                <li>2020 — Moved to current 15,000 sq ft facility</li>
                <li>2024 — 500+ vehicles sold, 5,000+ details completed</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title="Meet the Team" subtitle="The people who make Detailing Bros happen" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <TeamMemberCard
              name="Mike Torres"
              role="Co-Founder & Sales Director"
              bio="The people person. Mike handles all sales and customer relationships."
              imageSrc="/images/team.jpg"
            />
            <TeamMemberCard
              name="Danny Torres"
              role="Co-Founder & Detailing Director"
              bio="The perfectionist. Danny oversees all detailing operations and training."
              imageSrc="/images/team.jpg"
            />
            <TeamMemberCard
              name="Carlos Mendez"
              role="Lead Detailer"
              bio="10 years experience. Ceramic coating specialist."
              imageSrc="/images/team.jpg"
            />
            <TeamMemberCard
              name="Jessica Park"
              role="Sales Associate"
              bio="Helping customers find their perfect ride since 2019."
              imageSrc="/images/team.jpg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title="What We Stand For" subtitle="The values that guide every detail" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold">Transparency</h3>
              <p className="mt-3 text-muted-foreground">
                No hidden fees. No pressure tactics. Just honest deals.
              </p>
            </Card>
            <Card className="rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold">Quality</h3>
              <p className="mt-3 text-muted-foreground">
                Every vehicle inspected. Every detail done right.
              </p>
            </Card>
            <Card className="rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold">Community</h3>
              <p className="mt-3 text-muted-foreground">
                Proud sponsors of local youth sports and charities.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
