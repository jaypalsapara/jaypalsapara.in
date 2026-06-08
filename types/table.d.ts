import {
  abilitiesTable,
  achievementsTable,
  experiencesTable,
  feedsTable,
  projectsTable,
  showcaseTable,
  technologiesTable,
  testimonialsTable,
} from '@/lib/schema';
import { ImageProps } from './assets';

export type ExperienceProps = typeof experiencesTable.$inferSelect;
export type ProjectProps = typeof projectsTable.$inferSelect;
export type AchievementProps = typeof achievementsTable.$inferSelect;
export type TestimonialProps = typeof testimonialsTable.$inferSelect;
export type TechnologyProps = typeof technologiesTable.$inferSelect;
export type AbilityProps = typeof abilitiesTable.$inferSelect;
export type ShowcaseProps = typeof showcaseTable.$inferSelect;
export type FeedsProps = typeof feedsTable.$inferSelect;

export type ShowcaseImage = ImageProps[][];
