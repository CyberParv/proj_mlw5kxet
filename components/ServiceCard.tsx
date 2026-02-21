import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Badge from '@/components/Badge';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  price: string;
  subtitle: string;
  items: string[];
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  isPopular?: boolean;
}

export default function ServiceCard({
  title,
  price,
  subtitle,
  items,
  description,
  ctaLabel = 'Book Service',
  ctaHref = '#',
  isPopular = false,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        'relative border border-white/10 bg-[#111111] p-6 text-white transition-all duration-300 hover:border-[#D62828]/60'
      )}
    >
      {isPopular && <Badge className="absolute right-6 top-6">Popular</Badge>}
      <div className="space-y-2">
        <h3 className="text-lg font-bold uppercase">{title}</h3>
        <p className="text-sm text-white/60">{subtitle}</p>
        <div className="text-2xl font-bold text-[#D62828]">{price}</div>
      </div>
      <p className="mt-4 text-sm text-white/70">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D62828]" />
            {item}
          </li>
        ))}
      </ul>
      <Button className="mt-6 w-full bg-white text-black hover:bg-white/90" asChild>
        <a href={ctaHref}>{ctaLabel}</a>
      </Button>
    </Card>
  );
}
