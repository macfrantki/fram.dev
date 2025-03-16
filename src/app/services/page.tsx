import Services from '@/components/sections/Services';
import { getServices } from '@/services/services/services';

export const metadata = {
  title: 'Our Services | fram.dev',
  description: 'Explore our comprehensive range of software development and consulting services.',
};

export default async function ServicesPage() {
  const services = await getServices();
  return <Services services={services} />;
}
