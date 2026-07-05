export const db =
  process.env.DATABASE_DRIVER === 'turso' ? (await import('@/lib/db-turso')).db : (await import('@/lib/db-sqlite')).db;
