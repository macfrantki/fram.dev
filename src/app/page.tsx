import Hero from './Hero';
import Services from './components/Services';
import { getServices } from '@/app/data/services/services';
import HomeClient from './components/HomeClient';

export default async function Home() {
  const services = await getServices();
  return (
    <div className="">
      <Hero />
      <Services services={services} />
      <HomeClient />
    </div>
  );
}
