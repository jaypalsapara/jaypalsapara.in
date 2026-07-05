import { db } from '@/lib/db';

export async function getTechnologies() {
  return await db.query.technologiesTable.findMany();
}
