import { db } from '@/lib/db';
import { technologiesTable } from '@/lib/schema';

export async function getTechnologies() {
  return await db.select().from(technologiesTable);
}
