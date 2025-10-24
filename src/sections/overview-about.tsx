import Wrapper from '@/components/wrapper';
import Overview from '@/data/overview-about-me.json';
import { Award, Languages, MapPin } from 'lucide-react';
const Icons = {
  Award,
  Languages,
  MapPin,
} as const;

type IconName = keyof typeof Icons;

const OverviewAbout = () => {
  return (
    <Wrapper className="gap-x-0 px-0 lg:gap-x-0 lg:px-0">
      {Overview.map((data) => {
        const IconName = data.icon as IconName;
        const Icon = Icons[IconName];
        return (
          <div
            className="pad-x col-span-4 flex flex-col gap-x-5 py-8 not-first:border-t lg:border-e lg:py-12 lg:not-first:border-t-0 lg:nth-[3n]:border-e-0 lg:nth-last-[n+4]:border-b"
            key={`service-${data.name}`}
          >
            <div className="grid size-12 place-content-center rounded-xs bg-accent-100/60 dark:bg-accent-900/28">
              <Icon className="size-6 stroke-accent" />
            </div>
            <div className="mt-4 grid">
              <h6>{data.name}</h6>
              <small className="mt-1 text-pretty text-muted-foreground">{data.description}</small>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default OverviewAbout;
