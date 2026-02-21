import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TeamMemberCardProps {
  title: string;
  subtitle: string;
  description: string;
  fullBio: string;
  imageSrc: string;
}

export default function TeamMemberCard({
  title,
  subtitle,
  description,
  fullBio,
  imageSrc,
}: TeamMemberCardProps) {
  return (
    <Card className={cn('group overflow-hidden border border-white/10 bg-[#111111] text-white transition-all duration-300')}>
      <div className="relative h-56 w-full">
        <Image src={imageSrc} alt={title} width={1600} height={900} className="h-full w-full object-cover" />
      </div>
      <div className="space-y-3 p-5">
        <div>
          <h3 className="text-lg font-bold uppercase">{title}</h3>
          <p className="text-sm text-white/60">{subtitle}</p>
        </div>
        <p className="text-sm text-white/70">{description}</p>
        <p className="text-sm text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {fullBio}
        </p>
      </div>
    </Card>
  );
}
