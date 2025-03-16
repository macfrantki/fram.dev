import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import { getServices } from '@/services/services/services';
import HomeClient from '@/components/sections/HomeClient';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'FRAM.DEV | Modern Web Development Studio',
  description:
    'Professional web development services for businesses looking to establish a powerful digital presence',
  alternates: {
    canonical: 'https://fram.dev',
  },
  openGraph: {
    title: 'FRAM.DEV | Modern Web Development Studio',
    description:
      'Professional web development services for businesses looking to establish a powerful digital presence',
    url: 'https://fram.dev',
    type: 'website',
  },
};

export default async function Home() {
  const services = await getServices();
  return (
    <>
      <JsonLd
        type="website"
        data={{
          name: 'FRAM.DEV',
          url: 'https://fram.dev',
          description:
            'Professional web development services for businesses looking to establish a powerful digital presence',
          siteUrl: 'https://fram.dev',
        }}
      />
      <JsonLd
        type="organization"
        data={{
          name: 'FRAM.DEV',
          url: 'https://fram.dev',
          logo: 'https://fram.dev/images/logo.svg',
          description:
            'Modern web development studio specializing in high-performance websites and applications',
          sameAs: ['https://twitter.com/framdev', 'https://github.com/framdev'],
        }}
      />
      <main className="relative">
        <Hero />
        <Services services={services} />
        <HomeClient />
      </main>
    </>
  );
}
