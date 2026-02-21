import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  showAccent?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  showAccent = true,
}: SectionHeaderProps) {
  return (
    <div className={cn('space-y-3', align === 'center' ? 'text-center' : 'text-left')}>
      <h2 className="text-2xl font-bold uppercase text-[#0A0A0A] md:text-3xl">{title}</h2>
      {showAccent && (
        <div
          className={cn(
            'h-1 w-16 rounded-full bg-[#D62828]',
            align === 'center' ? 'mx-auto' : 'mx-0'
          )}
        />
      )}
      {subtitle && <p className="text-sm text-black/60 md:text-base">{subtitle}</p>}
    </div>
  );
}
