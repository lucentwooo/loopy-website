import type { Metadata } from 'next';
import { Nav } from '@/components/Nav/Nav';
import { Pricing } from '@/components/Pricing/Pricing';
import { Compare } from '@/components/Compare/Compare';
import { Faq } from '@/components/Faq/Faq';
import { Footer } from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Pricing - Loopy · free first brief, plans from $149/mo',
  description:
    'Try Loopy free on your own brand: customer research, ranked ad concepts and a ready-to-send creative brief, no card. Starter $149/mo, Pro $299/mo, Max from $1,999/mo. Pay yearly and save 15%.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return (
    <>
      <Nav page="pricing" />
      <main>
        <Pricing standalone />
        <Compare />
        <Faq />
      </main>
      <Footer page="pricing" />
    </>
  );
}
