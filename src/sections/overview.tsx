import Wrapper from '@/components/wrapper';
import overviewData from '@/data/overview.json';
// import { BadgeCheck, PackageCheck, Star } from 'lucide-react';

// const Icons = {
//   PackageCheck,
//   BadgeCheck,
//   Star,
// } as const;

// type IconName = keyof typeof Icons;

const Overview = () => {
  return (
    <Wrapper className="gap-x-0 px-0 lg:gap-x-0 lg:px-0">
      <div className="pad-x col-span-4 flex items-center gap-x-5 py-8 not-last:border-b lg:col-span-3 lg:py-11 lg:not-last:border-e lg:not-last:border-b-0">
        <p className="font-medium text-muted-foreground">Proof by numbers you can trust, reflecting delivered and client satisfaction.</p>
      </div>
      {overviewData.map((data) => {
        // const IconName = data.icon as IconName;
        // const Icon = Icons[IconName];
        return (
          <div
            className="pad-x col-span-4 flex items-center justify-center gap-x-5 py-8 not-last:border-b lg:col-span-3 lg:py-11 lg:not-last:border-e lg:not-last:border-b-0"
            key={`overview-${data.label}`}
          >
            {/* <Icon className="size-11 stroke-accent stroke-1 lg:size-11.5" /> */}
            <div>
              <h3 className="text-center font-medium">{data.label}</h3>
              <p className="mt-2 text-muted-foreground">{data.subtitle}</p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Overview;
