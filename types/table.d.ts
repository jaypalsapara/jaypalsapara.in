import { achievementsTable, experiencesTable, projectsTable } from '@/lib/schema';

export type ExperienceProps = typeof experiencesTable.$inferSelect;
export type ProjectProps = typeof projectsTable.$inferSelect;
export type AchievementProps = typeof achievementsTable.$inferSelect;
