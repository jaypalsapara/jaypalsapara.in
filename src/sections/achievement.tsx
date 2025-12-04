import SectionBadge from '@/components/section-badge';
import SectionContent from '@/components/section-content';
import SectionHeader from '@/components/sectoin-header';
import Wrapper from '@/components/wrapper';
import Achievements from '@/data/achievements.json';
import { ArrowUp, Crown, Mailbox, Trophy } from 'lucide-react';

const Icons = {
  ArrowUp,
  Crown,
  Mailbox,
} as const;

type IconName = keyof typeof Icons;

export default function Achievement() {
  return (
    <>
      <SectionBadge Icon={Trophy} title="Achievements" />
      <SectionHeader
        title="Earned from excellent results"
        description="Consistently delivered high-quality results that exceeded client expectations. Each success sparked growth and trust."
      />
      <SectionContent className="mb-14 lg:mb-18">
        <Wrapper className="gap-y-12">
          {Achievements.map((achievement) => {
            const IconName = achievement.icon as IconName;
            const Icon = Icons[IconName];
            return (
              <div className="col-span-3 flex gap-4" key={`achievement-${achievement.title}`} title={achievement.description}>
                <div className="grid size-11 place-content-center rounded-xs bg-accent text-accent-foreground">
                  <Icon className="size-6 stroke-[1.8]" />
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">{achievement.title}</p>
                  <small className="text-muted-foreground">{achievement.subtitle}</small>
                </div>
              </div>
            );
          })}
        </Wrapper>
      </SectionContent>
    </>
  );
}
