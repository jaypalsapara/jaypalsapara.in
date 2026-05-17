import { db } from '@/lib/db';
import { TechnologyProps } from '@/types/table';
import Image from 'next/image';
import H4 from '../h4';

export default function Technologies() {
  return (
    <div className="grid lg:grid-cols-2 px-4 py-6">
      <div>
        <H4 className="sticky top-14">Technologies</H4>
      </div>
      <div>
        <TechnologiesGrid />
      </div>
    </div>
  );
}

const TechnologiesGrid = async () => {
  const technologies: TechnologyProps[] = await db.query.technologiesTable.findMany();
  const technologiesGroup = Object.groupBy(technologies, (tech) => tech.category) as Record<string, TechnologyProps[]>;
  return (
    <div className="space-y-10">
      {Object.keys(technologiesGroup).map((group) => (
        <div key={`tech-group-${group}`} className="flex flex-col gap-4">
          <div className="capitalize text-muted-foreground">{group}</div>
          <div className="flex flex-wrap gap-x-4 gap-y-6">
            {technologiesGroup[group].map((tech) => (
              <div key={`technology-${tech.id}`} className="flex gap-4 w-[18ch] items-center shrink-0">
                <div
                  className="grid size-10 lg:size-14 place-content-center border rounded-lg shrink-0"
                  style={{ backgroundColor: `color-mix(in oklab, ${tech.color} 8%, #ffffff 92%)` }}
                >
                  <Image
                    src={`/images/technologies/${tech.icon}`}
                    alt={`${tech.name} Icon`}
                    width={48}
                    height={48}
                    className="object-contain size-6 lg:size-8 shrink-0"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{tech.name}</p>
                  <p className="text-sm text-muted-foreground">{tech.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
