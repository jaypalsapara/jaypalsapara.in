import { ProjectProps } from '@/types/table';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectSquare({ data }: { data: ProjectProps }) {
  return (
    <div className="group relative">
      <div className="w-full aspect-square overflow-hidden rounded-xl grid [grid-template-areas:stack] *:[grid-area:stack] isolate">
        <div className="bg-muted-foreground/10 py-1 px-2.5 rounded-full z-10 justify-self-end self-start mt-3 mr-3 hidden group-hover:flex">
          <p className="text-muted-foreground font-semibold text-[10px] uppercase">Case Study</p>
        </div>
        <Image
          src={`/images/projects/${data.id}/${data.thumbnail}`}
          alt={`${data.name} Thumbnail`}
          width={1560}
          height={1560}
          priority
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="px-2 mt-4">
        <p className="text-xs font-medium">
          <Link href={'#'}>
            <span className="absolute inset-0"></span>
            {data.name}
          </Link>
        </p>
        <p className="text-xs font-medium text-muted-foreground">Website</p>
      </div>
    </div>
  );
}
