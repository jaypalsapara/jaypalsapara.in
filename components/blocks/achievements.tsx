import H4 from '@/components/h4';
import P from '@/components/p';
import { db } from '@/lib/db';
import { cn } from '@/lib/utils';
import { AchievementProps } from '@/types/table';
import Image from 'next/image';

export default function Achievements() {
  return (
    <div className="grid lg:grid-cols-2 px-4 py-6">
      <div>
        <H4 className="sticky top-14">Achievements</H4>
      </div>
      <div className="mt-8 lg:mt-0">
        <AchievementsGrid />
      </div>
    </div>
  );
}

const AchievementsGrid = async ({ className }: { className?: string }) => {
  const achievements: AchievementProps[] = await db.query.achievementsTable.findMany();
  return (
    <div className={cn('flex gap-6 flex-wrap', className)}>
      {achievements.map((achievement) => (
        <div key={`achievement-${achievement.id}`} className="flex items-center gap-4 w-full md:w-72">
          <Image
            src={`/images/${achievement.thumbnail}`}
            alt={`${achievement.name} Logo`}
            width={80}
            height={80}
            loading="lazy"
            className="object-cover size-12 lg:size-17 rounded-lg lg:rounded-xl"
          />
          <div>
            <P className="tracking-tight">{achievement.name}</P>
            <p className="text-sm lg:text-base tracking-tight text-muted-foreground">{achievement.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
