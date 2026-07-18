import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { AIAssistant } from '@/components/sections/AIAssistant';
import { FAQ } from '@/components/sections/FAQ';
import { OwnerCallout } from '@/components/sections/OwnerCallout';
import { AppStoreBanner } from '@/components/sections/AppStoreBanner';
import { FooterCTA } from '@/components/sections/FooterCTA';

export function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <AIAssistant />
        <FAQ />
        <OwnerCallout />
        <AppStoreBanner />
        <FooterCTA />
      </main>
    </>
  );
}
