import { db } from '@/lib/db';
import { pluginsTable } from '@/lib/schema';
import { asc } from 'drizzle-orm';

export async function getIntegrations() {
  return await db.select().from(pluginsTable).orderBy(asc(pluginsTable.sequence));
}
