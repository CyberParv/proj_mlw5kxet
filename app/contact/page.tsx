import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Get In Touch"
            subtitle="Questions about a vehicle? Ready to book a detail? We're here to help."
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <ContactForm
              title="Send a Message"
              fields={[
                { name: 'name', type: 'text', label: 'Full Name', required: true },
                { name: 'email', type: 'email', label: 'Email Address', required: true },
                { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
                {
                  name: 'interest',
                  type: 'select',
                  label: "I'm Interested In",
                  options: [
                    'Buying a Vehicle',
                    'Detailing Services',
                    'Financing',
                    'Trade-In',
                    'General Inquiry',
                  ],
                },
                { name: 'message', type: 'textarea', label: 'Message', required: true },
              ]}
              submitLabel="Send Message"
            />
            <Card className="rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold">Contact Details</h3>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>4521 Motor Mile Drive, Charlotte, NC 28269</p>
                <p>(704) 555-BROS</p>
                <p>info@detailingbros.com</p>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold">Hours</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
                  <li>Saturday: 9:00 AM - 5:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title="Find Us" subtitle="Visit our Charlotte showroom" />
          <div className="mt-8 overflow-hidden rounded-lg border border-border">
            <iframe
              title="Detailing Bros Map"
              src="https://maps.google.com/maps?q=4521%20Motor%20Mile%20Drive%2C%20Charlotte%2C%20NC%2028269&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-[360px] w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
