import { db } from '@/lib/db';

export const getFeeds = async () => {
  return await db.query.feedsTable.findMany({
    orderBy: {
      sequence: 'asc',
    },
  });
};
