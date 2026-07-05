import { db } from '@/lib/db';

export async function getAbilities() {
  return await db.query.abilitiesTable.findMany({
    orderBy: {
      sequence: 'asc',
    },
  });
}
