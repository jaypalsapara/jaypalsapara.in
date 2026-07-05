import { db } from '@/lib/db';
import { abilitiesTable } from '@/lib/schema';
import { asc } from 'drizzle-orm';

export async function getAbilities() {
  return await db.select().from(abilitiesTable).orderBy(asc(abilitiesTable.sequence));
}
