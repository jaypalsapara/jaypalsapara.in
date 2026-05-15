import { experiencesTable, projectsTable } from '@/lib/schema';

export type ExperiencesProps = typeof experiencesTable.$inferSelect;
export type ProjectsProps = typeof projectsTable.$inferSelect;
