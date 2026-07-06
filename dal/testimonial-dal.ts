import { db } from '@/lib/db';

export async function getTestimonials() {
  return await db.query.testimonialsTable.findMany();
}
