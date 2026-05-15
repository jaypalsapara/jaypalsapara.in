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
  id: text().primaryKey(),
  thumbnail: text().notNull(),
  cover: text().notNull(),
  name: text().notNull(),
  description: text().notNull(),
  category: text().notNull(),
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
    projectId: text('project_id')
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
