import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface VehicleCardProps {
  title: string;
  subtitle?: string;
  price: string;
  items: string[];
  imageSrc: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function VehicleCard({
  title,
  subtitle,
  price,
  items,
  imageSrc,
  ctaLabel = 'View Details',
  ctaHref = '#',
}: VehicleCardProps) {
  return (
    <Card
      className={cn(
        'overflow-hidden border border-white/10 bg-[#111111] text-white transition-all duration-300 hover:border-[#D62828]/60 hover:shadow-[0_0_20px_rgba(214,40,40,0.2)]'
      )}
    >
      <div className="relative h-48 w-full">
        <Image src={imageSrc} alt={title} width={1600} height={900} className="h-full w-full object-cover" />
      </div>
      <div className="space-y-3 p-5">
        <div>
          <h3 className="text-lg font-bold uppercase">{title}</h3>
          {subtitle && <p className="text-sm text-white/60">{subtitle}</p>}
        </div>
        <div className="text-2xl font-bold text-[#D62828]">{price}</div>
        <div className="grid grid-cols-2 gap-2 text-sm text-white/70">
          {items.map((item) => (
            <div key={item} className="rounded-md border border-white/10 px-2 py-1">
              {item}
            </div>
          ))}
        </div>
        <Button className="w-full bg-white text-black hover:bg-white/90" asChild>
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      </div>
    </Card>
  );
}
