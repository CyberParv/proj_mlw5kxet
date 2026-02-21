import Image from 'next/image';
import FilterSidebar from '@/components/FilterSidebar';
import VehicleCard from '@/components/VehicleCard';
import SectionHeader from '@/components/SectionHeader';
import Badge from '@/components/Badge';
import { Button } from '@/components/ui/button';

export default function InventoryPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative h-[50vh] min-h-[420px]">
        <Image
          src="/images/gallery.jpg"
          alt="Detailing Bros inventory showcase"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              title="Our Inventory"
              subtitle="127 quality pre-owned vehicles ready for you"
            />
            <div className="mt-6">
              <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wide">
                <a href="/contact">Schedule a Test Drive</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <FilterSidebar
              filters={[
                { name: 'Make', options: [] },
                { name: 'Model', options: [] },
                { name: 'Year', options: [] },
                { name: 'Price', options: [] },
                { name: 'Mileage', options: [] },
                { name: 'Body Type', options: [] },
                { name: 'Transmission', options: [] },
                { name: 'Fuel Type', options: [] },
                { name: 'Color', options: [] },
              ]}
            />
            <div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <VehicleCard
                  title="2022 Chevrolet Tahoe RST"
                  price="$56,900"
                  mileage="22,300 mi"
                  transmission="Automatic"
                  fuelType="Gasoline"
                  imageSrc="/images/gallery.jpg"
                  badge={<Badge>Family Favorite</Badge>}
                />
                <VehicleCard
                  title="2020 Toyota Tacoma TRD Pro"
                  price="$41,500"
                  mileage="29,100 mi"
                  transmission="Automatic"
                  fuelType="Gasoline"
                  imageSrc="/images/gallery.jpg"
                  badge={<Badge>Off-Road</Badge>}
                />
              </div>
              <div className="mt-10 flex justify-center">
                <Button variant="outline" className="rounded-md px-8 py-4 font-bold uppercase tracking-wide">
                  Load More Vehicles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
