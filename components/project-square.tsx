import ClientCldImage from '@/components/client-cld-image';
import { ProjectProps } from '@/types/table';
import { Lock } from 'lucide-react';
import TransitionLink from './transition-link';

const keyAsLabel = {
  case_study: 'Case Study',
  recent: 'Recent',
  personal: 'Personal',
} as const;

export default function ProjectSquare({ data }: { data: ProjectProps }) {
  return (
    <div className="group relative" data-nosnippet>
      <div className="w-full aspect-square overflow-hidden rounded-lg lg:rounded-xl pile isolate">
        <ClientCldImage
          src={`/images/projects/${data.slug}/${data.thumbnail}`}
          alt={`${data.name} Thumbnail`}
          width={1560}
          height={1560}
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform size-full ease-in-out duration-300"
        />
        <ProjectLabel label={keyAsLabel[data.as]} isNda={data.is_under_nda} />
      </div>
      <div className="px-2 mt-4">
        <p className="text-xs font-medium">
          {data.is_under_nda ? (
            <a tabIndex={0}>
              <span className="absolute inset-0"></span>
              {data.name}
            </a>
          ) : (
            <TransitionLink href={`/work/${data.slug}`}>
              <span className="absolute inset-0"></span>
              {data.name}
            </TransitionLink>
          )}
        </p>
        <p className="text-[0.625rem] md:text-xs font-medium text-muted-foreground">{data.subtitle}</p>
      </div>
    </div>
  );
}

const ProjectLabel = ({ label, isNda }: { label: string; isNda: boolean }) => {
  return (
    <div className="bg-muted-foreground/10 py-1 px-2.5 rounded-full z-10 mt-3 mr-3 hidden pointer-coarse:group-focus-within:flex  group-hover:flex justify-self-end self-start text-[10px] items-center gap-2 uppercase font-medium text-muted-foreground">
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
