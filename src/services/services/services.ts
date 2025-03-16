import { getAllServices } from '@/lib/content-api';
import { Service } from '@/types/services';

export async function getServices(): Promise<Service[]> {
  return getAllServices();
}
