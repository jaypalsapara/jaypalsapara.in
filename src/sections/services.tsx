import SectionBadge from '@/components/section-badge';
import SectionContent from '@/components/section-content';
import SectionHeader from '@/components/sectoin-header';
import Wrapper from '@/components/wrapper';
import Data from '@/data/services.json';
import { Activity, ArrowLeftRight, Bug, CloudUpload, Code, MonitorSmartphone, Palette, Rocket, TrendingUp, Zap } from 'lucide-react';

const Icons = {
  Rocket,
  CloudUpload,
  Bug,
  Activity,
  Code,
  TrendingUp,
  ArrowLeftRight,
  MonitorSmartphone,
  Palette,
} as const;

type IconName = keyof typeof Icons;

const Services = () => {
  return (
    <>
      <SectionBadge Icon={Zap} title="Ability" />
      <SectionHeader
        title="Services that make the online experience better"
        description="Versatile skill set across creative and technical domains. Providing reliable services to bring your ideas to life."
      />
      <SectionContent className="mt-6 lg:mt-18">
        <Wrapper className="gap-x-0 px-0 lg:gap-x-0 lg:px-0">
          {Data.map((data) => {
            const IconName = data.icon as IconName;
            const Icon = Icons[IconName];
            return (
              <div
                className="pad-x col-span-4 flex flex-col gap-x-5 py-10 max-lg:not-last:border-b md:col-span-2 lg:col-span-4 lg:border-e lg:py-12 lg:nth-[-n+3]:border-t lg:nth-[3n]:border-e-0 lg:nth-last-[n+4]:border-b"
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
      </SectionContent>
    </>
  );
};

export default Services;
