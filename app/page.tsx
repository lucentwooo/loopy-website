import { Nav } from '@/components/Nav/Nav';
import { Hero } from '@/components/Hero/Hero';
import { Problem } from '@/components/Problem/Problem';
import { HowItWorks } from '@/components/HowItWorks/HowItWorks';
import { InsideBrief } from '@/components/InsideBrief/InsideBrief';
import { BetterInput } from '@/components/BetterInput/BetterInput';
import { Loop } from '@/components/Loop/Loop';
import { Proof } from '@/components/Proof/Proof';
import { Pricing } from '@/components/Pricing/Pricing';
import { Faq } from '@/components/Faq/Faq';
import { FinalCta } from '@/components/FinalCta/FinalCta';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <InsideBrief />
        <BetterInput />
        <Loop />
        <Proof />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
