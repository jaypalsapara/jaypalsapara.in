import { ImageProps } from '@/types/assets';
import { ShowcaseImage } from '@/types/table';
import { relations } from 'drizzle-orm';
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

// Relations of experiences
export const experienceRelations = relations(experiencesTable, ({ many }) => ({
  experiencesToProjects: many(experiencesToProjectsTable), // Connect to the pivot many-to-many
}));

// Relations of projects
export const projectsRelations = relations(projectsTable, ({ many }) => ({
  experiencesToProjects: many(experiencesToProjectsTable), // Connect to the pivot many-to-many
  showcase: many(showcaseTable),
}));

// Relations of pivot: Experiences to Projects
export const experiencesToProjectsRelations = relations(experiencesToProjectsTable, ({ one }) => ({
  experience: one(experiencesTable, {
    fields: [experiencesToProjectsTable.experienceId],
    references: [experiencesTable.id],
  }), // Connect to the experiences
  project: one(projectsTable, {
    fields: [experiencesToProjectsTable.projectId],
    references: [projectsTable.id],
  }), // Connect to the projects
}));

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

// Relations of showcase
export const showcaseRelations = relations(showcaseTable, ({ one }) => ({
  project: one(projectsTable, {
    fields: [showcaseTable.projectId],
    references: [projectsTable.id],
  }),
}));

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
