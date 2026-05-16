import { achievementsTable, experiencesTable, projectsTable, testimonialsTable } from '@/lib/schema';

export type ExperienceProps = typeof experiencesTable.$inferSelect;
export type ProjectProps = typeof projectsTable.$inferSelect;
export type AchievementProps = typeof achievementsTable.$inferSelect;
export type TestimonialProps = typeof testimonialsTable.$inferSelect;
