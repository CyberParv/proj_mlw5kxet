import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-[#D62828] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white',
        className
      )}
    >
      {children}
    </span>
  );
}
