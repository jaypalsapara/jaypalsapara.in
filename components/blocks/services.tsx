import { db } from '@/lib/db';
import { technologiesTable } from '@/lib/schema';
import { TechnologyProps } from '@/types/table';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import H1 from '../h1';

export default function Services() {
  return (
    <div className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
      <div className="lg:col-start-2">
        <H1 className="font-bold">Technologies</H1>
      </div>
      <div className="col-span-full mt-10">
        <ListOfServices />
      </div>
    </div>
  );
}

const ListOfServices = async () => {
  const technologies: TechnologyProps[] = await db.select().from(technologiesTable);
  return (
    <div className="grid grid-cols-12 [counter-reset:index] divide-y *:py-2 *:items-center">
      <div className="grid grid-cols-subgrid col-span-full font-medium text-xs px-2">
        <p className="col-span-2 md:col-span-3 text-end self-start max-w-[3ch]">#</p>
        <p className="col-span-4 md:col-span-3">Type</p>
        <p className="col-span-6">Title</p>
      </div>
      {technologies.map((tech) => (
        <div
          key={`technology-${tech.id}`}
          className="grid grid-cols-subgrid col-span-full [counter-increment:index] before:content-[counter(index)]  relative has-[a]:hover:bg-muted/50 before:text-end before:self-start before:max-w-[2ch] px-2 transition-colors will-change-['background-color'] group before:text-sm before:col-span-2 md:before:col-span-3"
        >
          <p className="text-sm text-muted-foreground col-span-4 md:col-span-3">{tech.type}</p>
          <div className="col-span-6 flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={`/images/technologies/${tech.icon}`}
                alt={`${tech.name} Icon`}
                width={48}
                height={48}
                className="object-contain opacity-0 group-hover:opacity-100 transition-all size-4 shrink-0 absolute  -translate-x-[calc(100%+0.9rem)] duration-300 ease-in-out group-hover:-translate-x-[calc(100%+0.6rem)]"
              />
              <p className="text-sm font-medium ">
                <a href={tech.url} target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0"></span>
                  {tech.name}
                </a>
              </p>
            </div>
            <div className="w-4 flex *:shrink-0 overflow-hidden">
              <ArrowRight className="size-4 text-yellow-400 -translate-x-4 group-hover:translate-x-0 transition-transform" />
              <ArrowRight className="size-4 -translate-x-4 group-hover:translate-x-0 transition-transform" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
