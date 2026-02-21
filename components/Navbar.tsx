'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavbarProps {
  title?: string;
}

export default function Navbar({ title = 'Detailing Bros' }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Inventory', href: '#inventory' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#D62828] text-white font-bold">
            DB
          </div>
          <span className="text-lg font-bold uppercase tracking-wide text-white">{title}</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-semibold uppercase text-white/80 hover:text-white">
              {link.label}
            </a>
          ))}
          <Button className="bg-[#D62828] text-white hover:bg-[#D62828]/90">Get Pre-Approved</Button>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-md border border-white/20 p-2 text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-y-0 right-0 z-40 w-72 transform bg-[#0A0A0A] p-6 shadow-xl transition-transform duration-300 md:hidden',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-base font-bold uppercase text-white">Menu</span>
          <button onClick={() => setOpen(false)} className="rounded-md border border-white/20 p-2 text-white">
            <X size={18} />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase text-white/80 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button className="mt-4 w-full bg-[#D62828] text-white hover:bg-[#D62828]/90">Get Pre-Approved</Button>
        </div>
      </div>
    </header>
  );
}
