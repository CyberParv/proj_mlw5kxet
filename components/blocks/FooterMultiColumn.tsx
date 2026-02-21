import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand?: string;
  description?: string;
  columns?: FooterColumn[];
  copyright?: string;
}

export default function FooterMultiColumn({
  brand = 'Velocity Auto',
  description = 'Premium automotive brokerage specializing in performance vehicles, transparent pricing, and concierge-level service.',
  columns = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Inventory', href: '#inventory' },
        { label: 'Featured', href: '#featured' },
        { label: 'Financing', href: '#financing-cta' },
        { label: 'Service', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#services' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ],
  copyright,
}: FooterMultiColumnProps) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold">{brand}</h3>
            <p className="mt-3 text-sm text-background/70">{description}</p>
            <div className="mt-6 space-y-2 text-sm text-background/70">
              <p>Call: (555) 210-8890</p>
              <p>Email: concierge@velocityauto.com</p>
              <p>Visit: 4880 Raceway Blvd, Austin, TX</p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <Link href="https://facebook.com" aria-label="Facebook" className="text-background/70 hover:text-background">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram" className="text-background/70 hover:text-background">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="text-background/70 hover:text-background">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube" className="text-background/70 hover:text-background">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          {columns.map(function(col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function(link) {
                    return (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-background">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Showroom Hours</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li>Mon - Fri: 9:00 AM - 7:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday: By appointment</li>
            </ul>
          </div>
        </div>
        <div className="my-8 h-px w-full bg-background/20" />
        <p className="text-center text-sm text-background/50">
          {copyright || ('\u00a9 ' + new Date().getFullYear() + ' ' + brand + '. All rights reserved.')}
        </p>
      </div>
    </footer>
  );
}
