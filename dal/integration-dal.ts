import { db } from '@/lib/db';

export async function getIntegrations() {
  return await db.query.pluginsTable.findMany({
    orderBy: {
      sequence: 'asc',
    },
  });
}
