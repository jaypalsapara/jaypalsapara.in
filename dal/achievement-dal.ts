import { db } from '@/lib/db';

export async function getAchievements() {
  return await db.query.achievementsTable.findMany();
}
