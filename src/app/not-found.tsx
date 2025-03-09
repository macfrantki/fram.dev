import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-6 text-2xl">Page Not Found</h2>
      <p className="mb-8 max-w-md text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved to another URL.
      </p>
      <Link
        href="/"
        className="rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
      >
        Return Home
      </Link>
    </div>
  );
}
