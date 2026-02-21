import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FooterProps {
  title?: string;
}

export default function Footer({ title = 'Detailing Bros' }: FooterProps) {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#D62828] font-bold">
                DB
              </div>
              <span className="text-lg font-bold uppercase tracking-wide">{title}</span>
            </div>
            <p className="text-sm text-white/70">
              Premium automotive sales, detailing, and service. We curate performance-ready vehicles and keep them
              showroom sharp.
            </p>
            <div className="flex items-center gap-3 text-white/70">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#inventory" className="hover:text-white">Inventory</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#financing" className="hover:text-white">Financing</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Paint Correction</li>
              <li>Ceramic Coating</li>
              <li>Interior Restoration</li>
              <li>Performance Prep</li>
            </ul>
            <div className="pt-2 text-sm text-white/70">
              <p className="font-semibold text-white">Business Hours</p>
              <p>Mon-Fri: 9am - 7pm</p>
              <p>Sat: 10am - 5pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wide">Contact</h4>
            <p className="text-sm text-white/70">1180 Apex Drive, Suite 200</p>
            <p className="text-sm text-white/70">Los Angeles, CA 90015</p>
            <p className="text-sm text-white/70">(323) 555-0199</p>
            <p className="text-sm text-white/70">sales@detailingbros.com</p>
            <div className="pt-4">
              <p className="text-sm font-semibold text-white">Newsletter</p>
              <div className="mt-2 flex gap-2">
                <Input className="border-white/20 bg-white/10 text-white placeholder:text-white/50" placeholder="Email address" />
                <Button className="bg-[#D62828] text-white hover:bg-[#D62828]/90">Join</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © 2024 Detailing Bros. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
