import { Metadata } from 'next';
import Contact from '@/components/sections/Contact';
import JsonLd from '@/components/seo/JsonLd';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contact Us | FRAM.DEV',
  description: 'Get in touch with the FRAM.DEV team for your web development projects and inquiries',
  alternates: {
    canonical: 'https://fram.dev/contact',
  },
  openGraph: {
    title: 'Contact Us | FRAM.DEV',
    description: 'Get in touch with the FRAM.DEV team for your web development projects and inquiries',
    url: 'https://fram.dev/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        type="organization"
        data={{
          name: "FRAM.DEV",
          url: "https://fram.dev",
          logo: "https://fram.dev/images/logo.svg",
          description: "Modern web development studio specializing in high-performance websites and applications",
          sameAs: [
            "https://twitter.com/framdev",
            "https://github.com/framdev"
          ]
        }}
      />
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or a question about our services? We&apos;d love to hear from you!
            Fill out the form below, and our team will get back to you as soon as possible.
          </p>
          
          <Contact />
          
          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">contact@fram.dev</p>
            </div>
            
            <div className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold">Office Hours</h3>
              <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9am - 6pm CET</p>
            </div>
            
            <div className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Remote team with headquarters in Warsaw, Poland</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 