import { drizzle } from 'drizzle-orm/better-sqlite3';
import path from 'path';
import { relations } from './schema';

const dbPath = path.join(process.cwd(), 'database', 'app.db');

export const db = drizzle({ connection: dbPath, relations });
