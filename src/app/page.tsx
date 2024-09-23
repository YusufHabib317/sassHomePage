import { Features, Header, Hero, Pricing, Faq } from '@/components';
import { Testimonials } from '@/components/home-sections/testimonials';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
    </>
  );
}
