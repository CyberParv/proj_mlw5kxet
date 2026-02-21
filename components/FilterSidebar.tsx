'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FilterSidebarProps {
  title?: string;
}

export default function FilterSidebar({ title = 'Refine Search' }: FilterSidebarProps) {
  const [sections, setSections] = useState({
    type: true,
    price: true,
    mileage: true,
    features: false,
  });

  const toggle = (key: keyof typeof sections) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="w-full rounded-lg border border-white/10 bg-[#0A0A0A] p-6 text-white">
      <h3 className="text-lg font-bold uppercase">{title}</h3>

      <div className="mt-6 space-y-6">
        <div>
          <button onClick={() => toggle('type')} className="flex w-full items-center justify-between text-sm font-semibold uppercase">
            Vehicle Type
            <ChevronDown size={16} className={cn('transition-transform', sections.type ? 'rotate-180' : 'rotate-0')} />
          </button>
          {sections.type && (
            <div className="mt-3 space-y-2 text-sm text-white/70">
              {['Sedan', 'SUV', 'Coupe', 'Truck'].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-white/30 bg-transparent" />
                  {item}
                </label>
              ))}
            </div>
          )}
        </div>

        <div>
          <button onClick={() => toggle('price')} className="flex w-full items-center justify-between text-sm font-semibold uppercase">
            Price Range
            <ChevronDown size={16} className={cn('transition-transform', sections.price ? 'rotate-180' : 'rotate-0')} />
          </button>
          {sections.price && (
            <div className="mt-3 space-y-2 text-sm text-white/70">
              <input type="range" min="20000" max="120000" className="w-full accent-[#D62828]" />
              <div className="flex items-center justify-between text-xs">
                <span>$20k</span>
                <span>$120k</span>
              </div>
            </div>
          )}
        </div>

        <div>
          <button onClick={() => toggle('mileage')} className="flex w-full items-center justify-between text-sm font-semibold uppercase">
            Mileage
            <ChevronDown size={16} className={cn('transition-transform', sections.mileage ? 'rotate-180' : 'rotate-0')} />
          </button>
          {sections.mileage && (
            <div className="mt-3 space-y-2 text-sm text-white/70">
              <input type="range" min="0" max="100000" className="w-full accent-[#D62828]" />
              <div className="flex items-center justify-between text-xs">
                <span>0 mi</span>
                <span>100k mi</span>
              </div>
            </div>
          )}
        </div>

        <div>
          <button onClick={() => toggle('features')} className="flex w-full items-center justify-between text-sm font-semibold uppercase">
            Features
            <ChevronDown size={16} className={cn('transition-transform', sections.features ? 'rotate-180' : 'rotate-0')} />
          </button>
          {sections.features && (
            <div className="mt-3 space-y-2 text-sm text-white/70">
              {['AWD', 'Navigation', 'Premium Audio', 'Heated Seats'].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-white/30 bg-transparent" />
                  {item}
                </label>
              ))}
            </div>
          )}
        </div>

        <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
          Clear Filters
        </Button>
      </div>
    </aside>
  );
}
