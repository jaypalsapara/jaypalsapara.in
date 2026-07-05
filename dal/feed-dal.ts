import { db } from '@/lib/db';
import { feedsTable } from '@/lib/schema';
import { asc } from 'drizzle-orm';

export const getFeeds = async () => {
  return await db.select().from(feedsTable).orderBy(asc(feedsTable.sequence));
};
