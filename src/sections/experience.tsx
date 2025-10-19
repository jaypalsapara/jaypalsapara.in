import SectionBadge from '@/components/section-badge';
import SectionContent from '@/components/section-content';
import SectionHeader from '@/components/sectoin-header';
import Wrapper from '@/components/wrapper';
import Experiences from '@/data/experience.json';
import { Sprout } from 'lucide-react';

const Experience = () => {
  return (
    <>
      <SectionBadge Icon={Sprout} title="Experience" />
      <SectionHeader
        title="Growing day by day"
        description="This is the amazing journey of my development career, filled with continuous learning, challenges, and achievements."
      />
      <SectionContent className="mb-14 lg:mb-18">
        <Wrapper>
          {Experiences.map((data) => (
            <div key={`experience-${data.company}`} className="col-span-full grid grid-cols-subgrid gap-y-2 not-first:pt-4 not-last:border-b not-last:pb-4">
              <div className="col-span-4 flex flex-col">
                <p className="font-medium">{data.company}</p>
                <small className="text-muted-foreground">{data.role}</small>
              </div>
              <div className="col-span-4">
                <small className="text-muted-foreground">{data.description}</small>
              </div>
              <div className="col-span-4 flex lg:justify-end">
                <small className="text-muted-foreground lg:text-end">
                  {data.duration.start} - {data.duration.end}
                </small>
              </div>
            </div>
          ))}
        </Wrapper>
      </SectionContent>
    </>
  );
};

export default Experience;
