import { ProjectProps } from '@/types/table';
import { Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import TransitionLink from './transition-link';

const keyAsLabel = {
  case_study: 'Case Study',
  recent: 'Recent',
  personal: 'Personal',
} as const;

export default function ProjectSquare({ data }: { data: ProjectProps }) {
  return (
    <div className="group relative">
      <div className="w-full aspect-square overflow-hidden rounded-xl grid [grid-template-areas:'stack'] *:[grid-area:'stack'] isolate">
        <ProjectLabel label={keyAsLabel[data.as]} isNda={data.is_under_nda} />
        <Image
          src={`/images/projects/${data.slug}/${data.thumbnail}`}
          alt={`${data.name} Thumbnail`}
          width={1560}
          height={1560}
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform size-full ease-in-out duration-300"
        />
      </div>
      <div className="px-2 mt-4">
        <p className="text-xs font-medium">
          {data.is_under_nda ? (
            data.name
          ) : (
            <TransitionLink href={`/work/${data.slug}`}>
              <span className="absolute inset-0"></span>
              {data.name}
            </TransitionLink>
          )}
        </p>
        <p className="text-xs font-medium text-muted-foreground">Website</p>
      </div>
    </div>
  );
}

const ProjectLabel = ({ label, isNda }: { label: string; isNda: boolean }) => {
  return (
    <div className="bg-muted-foreground/10 py-1 px-2.5 rounded-full z-10 mt-3 mr-3 hidden group-hover:flex absolute justify-self-end self-start text-[10px] items-center gap-2 uppercase font-medium text-muted-foreground">
      {isNda ? (
        <>
          <Lock className="size-3" /> <span className="mt-px">Locked</span>
        </>
      ) : (
        <span className="mt-px">{label}</span>
      )}
    </div>
  );
};
