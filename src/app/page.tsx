'use client';

import Hero from './Hero';
import TechStack from './TechStack';
import Contact from './Contact';
import Services from './Services';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <TechStack />
      <Contact />
    </div>
  );
}
