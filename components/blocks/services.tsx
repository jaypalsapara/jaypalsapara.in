import { db } from '@/lib/db';
import { keyLabel } from '@/lib/key-labels';
import { abilitiesTable, pluginsTable, technologiesTable } from '@/lib/schema';
import { AbilityProps, PluginsProps, TechnologyProps } from '@/types/table';
import { asc } from 'drizzle-orm';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import H1 from '../h1';

type ListItemProps = {
  type: string;
  typeSpan?: string;
  icon: string | null;
  name: string;
  url: string | null;
};

export default function Services() {
  return (
    <div className="flex flex-col gap-y-18">
      <div className="grid lg:grid-cols-2 pt-8 px-4 w-full">
        <div className="lg:col-start-2">
          <H1 className="font-bold">Ability</H1>
        </div>
        <div className="col-span-full mt-10">
          <ListOfAbilities />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 pt-8 px-4 w-full">
        <div className="lg:col-start-2">
          <H1 className="font-bold">Integration</H1>
        </div>
        <div className="col-span-full mt-10">
          <ListOfIntegration />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 pt-8 px-4 w-full">
        <div className="lg:col-start-2">
          <H1 className="font-bold">All tech</H1>
        </div>
        <div className="col-span-full mt-10">
          <ListOfTechnologies />
        </div>
      </div>
    </div>
  );
}

const ListOfTechnologies = async () => {
  const technologies: TechnologyProps[] = await db.select().from(technologiesTable);
  const collections = Object.groupBy(technologies, (tech) => tech.category);

  return (
    <div className="grid grid-cols-12 [counter-reset:index] divide-y *:py-2 *:items-center">
      <div className="grid grid-cols-subgrid col-span-full font-medium text-xs px-2">
        <p className="col-span-2 md:col-span-3 text-end self-start max-w-[3ch]">#</p>
        <p className="col-span-4 md:col-span-3">Type</p>
        <p className="col-span-6">Title</p>
      </div>
      {Object.keys(collections).map((category) => {
        const techs: TechnologyProps[] = collections[category as keyof typeof collections] as TechnologyProps[];
        return techs.map((tech) => (
          <ListItem
            key={`technology-${tech.id}`}
            type={category}
            typeSpan={keyLabel[tech.type] || tech.type}
            name={tech.name}
            icon={`/images/technologies/${tech.icon}`}
            url={tech.url}
          />
        ));
      })}
    </div>
  );
};

const ListOfAbilities = async () => {
  const abilities: AbilityProps[] = await db.select().from(abilitiesTable);
  return (
    <div className="grid grid-cols-12 [counter-reset:index] divide-y *:py-2 *:items-center">
      <div className="grid grid-cols-subgrid col-span-full font-medium text-xs px-2">
        <p className="col-span-2 md:col-span-3 text-end self-start max-w-[3ch]">#</p>
        <p className="col-span-4 md:col-span-3">Type</p>
        <p className="col-span-6">Title</p>
      </div>
      {abilities.map((ability) => (
        <ListItem
          key={`ability-${ability.id}`}
          type={'Service'}
          name={ability.name}
          icon={`/images/icons/${ability.icon}`}
          url={null}
        />
      ))}
    </div>
  );
};
const ListOfIntegration = async () => {
  const plugins: PluginsProps[] = await db.select().from(pluginsTable).orderBy(asc(pluginsTable.sequence));
  return (
    <div className="grid grid-cols-12 [counter-reset:index] divide-y *:py-2 *:items-center">
      <div className="grid grid-cols-subgrid col-span-full font-medium text-xs px-2">
        <p className="col-span-2 md:col-span-3 text-end self-start max-w-[3ch]">#</p>
        <p className="col-span-4 md:col-span-3">Type</p>
        <p className="col-span-6">Title</p>
      </div>
      {plugins.map((plugin) => (
        <ListItem
          key={`plugin-${plugin.id}`}
          type={'Service'}
          typeSpan={keyLabel[plugin.type] || plugin.type}
          name={plugin.name}
          icon={`/images/icons/${plugin.icon}`}
          url={null}
        />
      ))}
    </div>
  );
};

const ListItem = ({ type, typeSpan, icon, name, url }: ListItemProps) => {
  return (
    <div className="grid grid-cols-subgrid col-span-full [counter-increment:index] before:content-[counter(index)]  relative has-[a]:hover:bg-muted/50 before:text-end before:self-start before:max-w-[2ch] px-2 transition-colors will-change-['background-color'] group before:text-sm before:col-span-2 md:before:col-span-3">
      <p className="text-sm text-muted-foreground col-span-4 md:col-span-3 capitalize">
        {type} {typeSpan && <span className="hidden md:inline">{typeSpan}</span>}
      </p>
      <div className="col-span-6 flex items-center justify-between">
        <div className="flex items-center">
          {icon && (
            <Image
              src={icon}
              alt={`${name} Icon`}
              width={48}
              height={48}
              loading="lazy"
              className="object-contain opacity-0 delay-[-75ms] group-hover:opacity-100 transition-all size-4 shrink-0 absolute  -translate-x-[calc(100%+0.9rem)] duration-300 ease-in-out group-hover:-translate-x-[calc(100%+0.6rem)]"
              data-bg-placeholder="false"
            />
          )}
          <p className="text-sm font-medium">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0"></span>
                {name}
              </a>
            ) : (
              name
            )}
          </p>
        </div>
        {url && (
          <div className="w-4 flex *:shrink-0 overflow-hidden">
            <ArrowRight className="size-4 text-yellow-400 -translate-x-4 group-hover:translate-x-0 transition-transform" />
            <ArrowRight className="size-4 -translate-x-4 group-hover:translate-x-0 transition-transform" />
          </div>
        )}
      </div>
    </div>
  );
};
