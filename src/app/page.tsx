import Hero from '@/components/sections/Hero';
import BackgroundCircles from '@/components/background/BackgroundCircles';
import BackgroundPaths from '@/components/background/BackgroundPaths';
import Services from '@/components/sections/Services';
import { getServices } from '@/services/services/services';
import HomeClient from '@/components/sections/HomeClient';

export default async function Home() {
  const services = await getServices();
  return (
    <main className="relative">
      <BackgroundCircles />
      <BackgroundPaths />
      <Hero />
      <Services services={services} />
      <HomeClient />
    </main>
  );
}
