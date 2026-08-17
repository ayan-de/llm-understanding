import { Hero } from '@/components/home/hero';
import { Features } from '@/components/home/features';
import { Why } from '@/components/home/why';
import { LearningPath } from '@/components/home/learning-path';
import { CTA } from '@/components/home/cta';
import { Footer } from '@/components/home/footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Why />
      <LearningPath />
      <CTA />
      <Footer />
    </>
  );
}