import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About | FRAM.DEV',
  description: 'Learn more about FRAM.DEV and our web development services',
  alternates: {
    canonical: 'https://fram.dev/about',
  },
  openGraph: {
    title: 'About FRAM.DEV',
    description: 'Learn more about FRAM.DEV and our web development services',
    url: 'https://fram.dev/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <h1 className="mb-6 text-4xl font-bold">About FRAM.DEV</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead mb-6">Modern web development for growing businesses</p>

            <p>
              We&apos;re a dedicated web development studio focused on creating modern,
              high-performance websites and applications for businesses looking to establish a
              powerful digital presence.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Our Story</h2>
            <p>
              Founded in 2023, FRAM.DEV was born from a passion for creating exceptional digital
              experiences. We combine technical expertise with creative vision to deliver websites
              that not only look stunning but perform flawlessly.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Our Approach</h2>
            <p>
              We believe in a collaborative, transparent approach to web development. Our process
              involves:
            </p>
            <ol className="mb-6 list-decimal pl-6">
              <li className="mb-2">
                <strong>Discovery:</strong> Understanding your business, goals, and audience
              </li>
              <li className="mb-2">
                <strong>Strategy:</strong> Developing a tailored plan for your digital presence
              </li>
              <li className="mb-2">
                <strong>Design:</strong> Creating visually compelling, user-focused interfaces
              </li>
              <li className="mb-2">
                <strong>Development:</strong> Building robust, scalable technical solutions
              </li>
              <li className="mb-2">
                <strong>Launch:</strong> Deploying with careful testing and optimization
              </li>
              <li className="mb-2">
                <strong>Support:</strong> Providing ongoing maintenance and improvements
              </li>
            </ol>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Our Values</h2>
            <ul className="mb-6 list-disc pl-6">
              <li className="mb-2">
                <strong>Quality:</strong> We never compromise on the quality of our work
              </li>
              <li className="mb-2">
                <strong>Innovation:</strong> We stay at the forefront of web technologies
              </li>
              <li className="mb-2">
                <strong>Reliability:</strong> We deliver on our promises, on time and on budget
              </li>
              <li className="mb-2">
                <strong>Transparency:</strong> We maintain clear communication throughout our
                projects
              </li>
              <li className="mb-2">
                <strong>Growth:</strong> We help businesses scale through effective digital
                solutions
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Let&apos;s Work Together</h2>
            <p>
              Have a project in mind? We&apos;d love to hear about it.{' '}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact us
              </a>{' '}
              to start the conversation about bringing your digital vision to life.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
