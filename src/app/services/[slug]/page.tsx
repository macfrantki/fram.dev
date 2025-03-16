import { SERVICE_CATEGORIES } from '@/app/data/services/categories';
import { ServiceContent } from './ServiceContent';

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((category) => ({
    slug: category.id,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  return <ServiceContent slug={params.slug} />;
}
