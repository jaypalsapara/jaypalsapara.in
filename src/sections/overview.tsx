import Wrapper from '@/components/wrapper';
import overviewData from '@/data/overview.json';
import { BadgeCheck, PackageCheck, Star } from 'lucide-react';

const Icons = {
  PackageCheck,
  BadgeCheck,
  Star,
} as const;

type IconName = keyof typeof Icons;

const Overview = () => {
  return (
    <Wrapper className="gap-x-0 px-0 lg:gap-x-0 lg:px-0">
      {overviewData.map((data) => {
        const IconName = data.icon as IconName;
        const Icon = Icons[IconName];
        return (
          <div
            className="pad-x col-span-4 flex items-center gap-x-5 py-8 not-last:border-b lg:py-11 lg:not-last:border-e lg:not-last:border-b-0"
            key={`overview-${data.label}`}
          >
            <Icon className="size-11 stroke-accent stroke-1 lg:size-11.5" />
            <div>
              <h3>{data.label}</h3>
              <p className="text-muted-foreground">{data.subtitle}</p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Overview;
