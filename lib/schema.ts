import { ImageProps } from '@/types/assets';
import { ShowcaseImage } from '@/types/table';

import { defineRelations } from 'drizzle-orm';

import { int, integer, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core';

/**
 * Experiences table
 */
export const experiencesTable = sqliteTable('experiences', {
  id: int().primaryKey({ autoIncrement: true }),
  thumbnail: text().notNull(),
  name: text().notNull(),
  role: text().notNull(),
  description: text().notNull(),
  start_at: integer('start_at', { mode: 'timestamp' }).notNull(),
  end_at: integer('end_at', { mode: 'timestamp' }),
});

/**
 * Projects table
 */
export const projectsTable = sqliteTable('projects', {
  id: int().primaryKey({ autoIncrement: true }),
  slug: text().notNull(),
  thumbnail: text().notNull(),
  cover: text().notNull(),
  footer_cover: text().notNull(),
  name: text().notNull(),
  subtitle: text().notNull(),
  description: text().notNull(),
  subordinate: text().notNull(),
  category: text().notNull(),
  as: text({ enum: ['case_study', 'personal', 'recent'] })
    .default('recent')
    .notNull(),
  sequence: integer().notNull(),
  is_under_nda: integer({ mode: 'boolean' }).default(false).notNull(),
});

/**
 * Pivot: Experiences to Projects
 */
export const experiencesToProjectsTable = sqliteTable(
  'experiences_to_projects',
  {
    experienceId: integer('experience_id')
      .notNull()
      .references(() => experiencesTable.id, { onDelete: 'cascade' }),
    projectId: integer('project_id')
      .notNull()
      .references(() => projectsTable.id, { onDelete: 'cascade' }),
  },
  (table) => [primaryKey({ columns: [table.experienceId, table.projectId] })],
);

/**
 * Achievements table
 */
export const achievementsTable = sqliteTable('achievements', {
  id: int().primaryKey({ autoIncrement: true }),
  thumbnail: text().notNull(),
  name: text().notNull(),
  subtitle: text().notNull(),
  description: text(),
});

/**
 * Testimonial table
 */
export const testimonialsTable = sqliteTable('testimonials', {
  id: int().primaryKey({ autoIncrement: true }),
  avatar: text().notNull(),
  name: text().notNull(),
  subtitle: text().notNull(),
  rating: integer().notNull(),
  description: text().notNull(),
  is_highlighted: integer({ mode: 'boolean' }).notNull().default(false),
  sequence: integer().notNull(),
});

/**
 * Technologies
 */
export const technologiesTable = sqliteTable('technologies', {
  id: int().primaryKey({ autoIncrement: true }),
  slug: text().notNull(),
  icon: text().notNull(),
  name: text().notNull(),
  color: text().notNull(),
  url: text().notNull(),
  type: text({
    enum: [
      'framework',
      'language',
      'library',
      'sql_database',
      'non_sql_database',
      'local_database',
      'service',
      'server',
      'version_control',
      'api',
      'design',
    ],
  }).notNull(),
  category: text({
    enum: ['backend', 'frontend', 'database', 'cloud', 'tool'],
  }).notNull(),
});

/**
 * ability
 */
export const abilitiesTable = sqliteTable('abilities', {
  id: int().primaryKey({ autoIncrement: true }),
  icon: text().notNull(),
  name: text().notNull(),
  description: text().notNull(),
  sequence: integer().notNull(),
});

/**
 * Showcase
 */
export const showcaseTable = sqliteTable('showcase', {
  id: int().primaryKey({ autoIncrement: true }),
  projectId: integer('project_id')
    .notNull()
    .references(() => projectsTable.id, { onDelete: 'cascade' }),
  name: text().notNull(),
  subtitle: text(),
  images: text({ mode: 'json' }).$type<ShowcaseImage>().notNull(),
});

/**
 * Feeds
 */
export const feedsTable = sqliteTable('feeds', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  image: text({ mode: 'json' }).$type<ImageProps>().notNull(),
  sequence: integer().notNull(),
  date: integer({ mode: 'timestamp' }),
});

/**
 * Plugins
 */
export const pluginsTable = sqliteTable('plugins', {
  id: int().primaryKey({ autoIncrement: true }),
  slug: text().notNull(),
  icon: text().notNull(),
  name: text().notNull(),
  color: text().notNull(),
  url: text().notNull(),
  sequence: integer().notNull(),
  type: text({
    enum: ['payments', 'authentication', 'real_time', 'geospatial'],
  }).notNull(),
  category: text({
    enum: ['service', 'security'],
  }).notNull(),
});

/**
 * Relations (RQBv2 — drizzle-orm v1)
 *
 * All relations are consolidated here using defineRelations().
 * Pass `relations` to your drizzle instance:
 *   import { relations } from './schema';
 *   const db = drizzle(url, { relations });
 */
export const relations = defineRelations(
  {
    experiencesTable,
    projectsTable,
    experiencesToProjectsTable,
    showcaseTable,
    achievementsTable,
    testimonialsTable,
    technologiesTable,
    abilitiesTable,
    feedsTable,
    pluginsTable,
  },
  (r) => ({
    // Experiences: many-to-many with projects (via pivot), and direct pivot access
    experiencesTable: {
      projects: r.many.projectsTable({
        from: r.experiencesTable.id.through(r.experiencesToProjectsTable.experienceId),
        to: r.projectsTable.id.through(r.experiencesToProjectsTable.projectId),
      }),
      experiencesToProjects: r.many.experiencesToProjectsTable(),
    },

    // Projects: many-to-many with experiences (via pivot), and one-to-many with showcase
    projectsTable: {
      experiences: r.many.experiencesTable({
        from: r.projectsTable.id.through(r.experiencesToProjectsTable.projectId),
        to: r.experiencesTable.id.through(r.experiencesToProjectsTable.experienceId),
      }),
      experiencesToProjects: r.many.experiencesToProjectsTable(),
      showcase: r.many.showcaseTable(),
    },

    // Pivot — joins back to both sides
    experiencesToProjectsTable: {
      experience: r.one.experiencesTable({
        from: r.experiencesToProjectsTable.experienceId,
        to: r.experiencesTable.id,
      }),
      project: r.one.projectsTable({
        from: r.experiencesToProjectsTable.projectId,
        to: r.projectsTable.id,
      }),
    },

    // Showcase belongs to a project
    showcaseTable: {
      project: r.one.projectsTable({
        from: r.showcaseTable.projectId,
        to: r.projectsTable.id,
      }),
    },
  }),
);
