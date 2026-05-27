import Footer from '@/components/footer';
import H1 from '@/components/h1';
import P from '@/components/p';
import { db } from '@/lib/db';
import { projectsTable } from '@/lib/schema';
import { cn } from '@/lib/utils';
import { ProjectProps, ShowcaseProps } from '@/types/table';
import { and, asc, eq, gt } from 'drizzle-orm';
import Image from 'next/image';

type CurrentProjectProps = ProjectProps & { showcase: ShowcaseProps[] };

type NextProjectProps = Pick<ProjectProps, 'name' | 'slug'> | undefined;

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = (await db.query.projectsTable.findFirst({
    where: eq(projectsTable.slug, slug),
    with: {
      showcase: true,
    },
  })) as CurrentProjectProps;

  const nextProject: NextProjectProps = await db.query.projectsTable.findFirst({
    where: and(eq(projectsTable.as, project.as), gt(projectsTable.sequence, project.sequence)),
    orderBy: asc(projectsTable.sequence),
    columns: {
      slug: true,
      name: true,
    },
  });

  return (
    <>
      <main className="flex w-full flex-1 flex-col relative">
        <section className="grid lg:grid-cols-2 pt-8 pb-6 lg:pb-8 px-4 w-full">
          <div className="lg:col-start-2">
            <H1 className="font-bold">{project.name}</H1>
          </div>
        </section>
        <section className="px-4">
          <Image
            src={`/images/projects/${project.slug}/${project.cover}`}
            width={3840}
            height={2160}
            alt={`${project.name} Cover`}
            priority
            className="aspect-video object-cover rounded-xl"
          />
        </section>
        <section className="grid lg:grid-cols-2 py-22 px-4 w-full">
          <div className="lg:col-start-2 space-y-6">
            {project.description.split('\n').map((paragraph, index) => (
              <P key={`project-${project.id}-description-paragraph-${index}`} className="text-xl xl:text-3xl">
                {paragraph}
              </P>
            ))}
          </div>
          <div className="lg:col-start-2 space-y-4 mt-12">
            {project.subordinate.split('\n').map((paragraph, index) => (
              <P
                key={`project-${project.id}-subordinate-paragraph-${index}`}
                className="text-xs lg:text-sm xl:text-sm text-muted-foreground max-w-[50ch]"
              >
                {paragraph}
              </P>
            ))}
          </div>
        </section>
        <section className="flex flex-col px-4">
          {project.showcase.map((showcase) => (
            <Showcase key={`showcase-${showcase.id}-of-${showcase.projectId}`} showcase={showcase} project={project} />
          ))}
        </section>
      </main>
      {nextProject ? (
        <Footer navigation={{ name: nextProject.name, path: `/work/${nextProject.slug}` }} />
      ) : (
        <Footer navigation={{ name: 'Service', path: '/service' }} />
      )}
    </>
  );
}

const Showcase = ({ showcase, project }: { showcase: ShowcaseProps; project: ProjectProps }) => {
  return (
    <div className="flex flex-col gap-4 pt-6 pb-4">
      <div>
        <div className="text-xs">
          <p className="font-medium">{showcase.name}</p>
          <p className="text-muted-foreground mt-px">{showcase.subtitle}</p>
        </div>
      </div>
      <div className="">
        {showcase.images.map((_, i) => (
          <div
            key={`showcase-${showcase.id}-block-${i}`}
            className={cn('grid', {
              'grid-cols-2': _.length == 2,
              'grid-cols-3': _.length >= 3,
            })}
          >
            {_.map((item) => (
              <Image
                key={`showcase-${showcase.id}-image-${item.name}`}
                src={`/images/projects/${project.slug}/${item.name}`}
                width={3840}
                height={2160}
                alt={`${item.name} Cover`}
                priority
                className="aspect-video object-cover rounded-xl"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
