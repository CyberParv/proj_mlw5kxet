import HeroImage from '@/components/HeroImage';
import VehicleCard from '@/components/VehicleCard';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import StatCounter from '@/components/StatCounter';
import FilterSidebar from '@/components/FilterSidebar';
import CTABanner from '@/components/CTABanner';
import TeamMemberCard from '@/components/TeamMemberCard';
import SectionHeader from '@/components/SectionHeader';
import Badge from '@/components/Badge';
import AboutPreview from '@/components/AboutPreview';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative">
        <HeroImage
          title="Drive Your Dream Today"
          subtitle="Premium pre-owned vehicles and professional detailing services. The Bros have you covered from purchase to polish."
          imageSrc="/images/hero.jpg"
          primaryCtaLabel="Browse Inventory"
          primaryCtaHref="#inventory"
          secondaryCtaLabel="Book Detailing"
          secondaryCtaHref="/contact"
        />
        <div className="bg-black">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid gap-6 md:grid-cols-3">
              <StatCounter value="500+" label="Vehicles Sold" />
              <StatCounter value="15+" label="Years Experience" />
              <StatCounter value="4.9" label="Customer Rating" />
            </div>
          </div>
        </div>
      </section>

      <section id="inventory" className="py-20 md:py-28 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Featured Vehicles"
            subtitle="Hand-picked premium rides ready for the road"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <VehicleCard
              title="2023 BMW M4 Competition"
              price="$72,995"
              mileage="8,200 mi"
              transmission="Automatic"
              fuelType="Gasoline"
              imageSrc="/images/gallery.jpg"
              badge={<Badge>Just Arrived</Badge>}
            />
            <VehicleCard
              title="2022 Mercedes-AMG C63"
              price="$68,500"
              mileage="12,400 mi"
              transmission="Automatic"
              fuelType="Gasoline"
              imageSrc="/images/gallery.jpg"
              badge={<Badge>Low Miles</Badge>}
            />
            <VehicleCard
              title="2023 Audi RS5 Sportback"
              price="$74,900"
              mileage="5,100 mi"
              transmission="Automatic"
              fuelType="Gasoline"
              imageSrc="/images/gallery.jpg"
              badge={<Badge>Certified</Badge>}
            />
            <VehicleCard
              title="2021 Ford Mustang GT"
              price="$42,995"
              mileage="18,700 mi"
              transmission="Manual"
              fuelType="Gasoline"
              imageSrc="/images/gallery.jpg"
              badge={<Badge>Best Value</Badge>}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Find Your Perfect Ride"
            subtitle="Search our entire inventory with advanced filters"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[320px_1fr]">
            <FilterSidebar
              filters={[
                {
                  name: 'Make',
                  options: [
                    'All Makes',
                    'BMW',
                    'Mercedes',
                    'Audi',
                    'Ford',
                    'Chevrolet',
                    'Toyota',
                    'Honda',
                  ],
                },
                {
                  name: 'Price Range',
                  options: [
                    'Any Price',
                    'Under $30K',
                    '$30K - $50K',
                    '$50K - $75K',
                    '$75K+',
                  ],
                },
                {
                  name: 'Year',
                  options: ['Any Year', '2024', '2023', '2022', '2021', '2020 & Older'],
                },
                {
                  name: 'Body Type',
                  options: ['All Types', 'Sedan', 'SUV', 'Coupe', 'Truck', 'Convertible'],
                },
              ]}
            />
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-2xl font-bold text-white">127 vehicles in stock</h3>
              <p className="mt-3 text-muted-foreground">
                Browse by make, model, price, and body style to find the exact vehicle
                you want. New arrivals are added weekly.
              </p>
              <div className="mt-6">
                <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wide">
                  <a href="/inventory">View Full Inventory</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Detailing Services"
            subtitle="Professional auto detailing that makes your ride shine like new"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Express Detail"
              price="$79"
              duration="1-2 hours"
              description="Quick exterior wash, interior vacuum, window cleaning, and tire shine"
              items={['Hand wash', 'Interior vacuum', 'Window cleaning', 'Tire dressing']}
            />
            <ServiceCard
              title="Full Detail"
              price="$199"
              duration="3-4 hours"
              description="Complete interior and exterior detail with clay bar treatment"
              items={[
                'Clay bar treatment',
                'Leather conditioning',
                'Engine bay cleaning',
                'Wax protection',
              ]}
              popular
            />
            <ServiceCard
              title="Ceramic Coating"
              price="$599"
              duration="1-2 days"
              description="Professional-grade ceramic coating for long-lasting protection"
              items={[
                'Paint correction',
                'Ceramic application',
                '5-year protection',
                'Hydrophobic finish',
              ]}
            />
            <ServiceCard
              title="Paint Correction"
              price="$349"
              duration="4-6 hours"
              description="Multi-stage polishing to remove swirls, scratches, and oxidation"
              items={['Swirl removal', 'Scratch repair', 'High-gloss finish', 'Sealant application']}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6">
          <CTABanner
            title="Flexible Financing Options"
            subtitle="Get pre-approved in minutes with rates as low as 4.9% APR"
            primaryCtaLabel="Get Pre-Approved"
            primaryCtaHref="/contact"
            secondaryCtaLabel="Calculate Payment"
            secondaryCtaHref="#"
            items={['No credit? No problem.', 'Same-day approval available', 'Trade-ins welcome']}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="What Our Customers Say"
            subtitle="Join hundreds of satisfied customers"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              name="Marcus Johnson"
              role="BMW M4 Owner"
              quote="The Bros made buying my M4 a breeze. No pressure, fair pricing, and they even detailed it before delivery. Best car buying experience I've ever had."
              rating={5}
              imageSrc="/images/team.jpg"
            />
            <TestimonialCard
              name="Sarah Chen"
              role="Detailing Customer"
              quote="I've tried every detailer in town. Detailing Bros is on another level. My Tesla looks better than when I bought it. The ceramic coating is incredible."
              rating={5}
              imageSrc="/images/team.jpg"
            />
            <TestimonialCard
              name="David Rodriguez"
              role="Repeat Customer"
              quote="Bought two cars from them and get my detailing done here exclusively. These guys treat you like family and their work speaks for itself."
              rating={5}
              imageSrc="/images/team.jpg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6">
          <AboutPreview
            title="Meet The Bros"
            subtitle="Family-owned and operated since 2009"
            description="What started as two brothers detailing cars in their parents' garage has grown into the area's most trusted name in pre-owned vehicles and professional detailing. We're not just selling cars—we're building relationships."
            imageSrc="/images/about.jpg"
            ctaLabel="Our Story"
            ctaHref="/about"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <TeamMemberCard
              name="Mike Torres"
              role="Co-Founder & Sales Director"
              bio="The people person. Mike handles all sales and customer relationships."
              imageSrc="/images/team.jpg"
            />
            <TeamMemberCard
              name="Danny Torres"
              role="Co-Founder & Detailing Expert"
              bio="The perfectionist. Danny oversees all detailing operations and training."
              imageSrc="/images/team.jpg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Visit Our Showroom"
            subtitle="Come see our inventory in person"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border p-8">
              <p className="text-lg font-semibold">4521 Motor Mile Drive, Charlotte, NC 28269</p>
              <p className="mt-3">(704) 555-BROS</p>
              <p className="mt-2">info@detailingbros.com</p>
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="mt-6">
                <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wide">
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-black text-white p-8">
              <h3 className="text-xl font-bold">Showroom Experience</h3>
              <p className="mt-4 text-muted-foreground">
                Tour our 15,000 sq ft facility with a full sales floor and detailing bay.
                Walk-ins are welcome, and test drives are available daily.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="rounded-md px-8 py-4 font-bold uppercase tracking-wide">
                  <a href="/inventory">Browse Inventory</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
