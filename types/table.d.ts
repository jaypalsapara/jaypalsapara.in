import {
  abilitiesTable,
  achievementsTable,
  experiencesTable,
  projectsTable,
  showcaseTable,
  technologiesTable,
  testimonialsTable,
} from '@/lib/schema';

export type ShowcaseImage = {
  name: string;
}[][];

export type ExperienceProps = typeof experiencesTable.$inferSelect;
export type ProjectProps = typeof projectsTable.$inferSelect;
export type AchievementProps = typeof achievementsTable.$inferSelect;
export type TestimonialProps = typeof testimonialsTable.$inferSelect;
export type TechnologyProps = typeof technologiesTable.$inferSelect;
export type AbilityProps = typeof abilitiesTable.$inferSelect;
export type ShowcaseProps = typeof showcaseTable.$inferSelect;
