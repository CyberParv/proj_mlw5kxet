import Image from 'next/image';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface TestimonialCardProps {
  title: string;
  subtitle: string;
  quote: string;
  rating?: number;
  imageSrc: string;
}

export default function TestimonialCard({
  title,
  subtitle,
  quote,
  rating = 5,
  imageSrc,
}: TestimonialCardProps) {
  return (
    <Card className="border border-white/10 bg-[#111111] p-6 text-white">
      <div className="flex items-center gap-4">
        <Image src={imageSrc} alt={title} width={800} height={600} className="h-14 w-14 rounded-full object-cover" />
        <div>
          <h4 className="text-base font-bold uppercase">{title}</h4>
          <p className="text-sm text-white/60">{subtitle}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1 text-[#D62828]">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} size={16} fill="#D62828" stroke="#D62828" />
        ))}
      </div>
      <p className="mt-4 text-sm text-white/70">“{quote}”</p>
    </Card>
  );
}
