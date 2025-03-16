import { getAllServices } from '@/lib/mdx';
import { Service } from '@/types/services';

export async function getServices(): Promise<Service[]> {
  return getAllServices();
}
