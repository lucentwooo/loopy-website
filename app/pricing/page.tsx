import type { Metadata } from 'next';
import { Nav } from '@/components/Nav/Nav';
import { Pricing } from '@/components/Pricing/Pricing';
import { Faq } from '@/components/Faq/Faq';
import { Footer } from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Pricing - Loopy · free first brief, plans from $249/mo',
  description:
    'Try Loopy free on a real client: research, ranked ad concepts and a ready-to-send creative brief, no card. Starter $249/mo, Agency $499/mo. Pay yearly and save 15%.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return (
    <>
      <Nav page="pricing" />
      <main>
        <Pricing standalone />
        <Faq />
      </main>
      <Footer page="pricing" />
    </>
  );
}
