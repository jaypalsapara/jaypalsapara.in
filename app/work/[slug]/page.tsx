import Footer from '@/components/footer';
import H1 from '@/components/h1';
import P from '@/components/p';
import { db } from '@/lib/db';
import { projectsTable } from '@/lib/schema';
import { ProjectProps } from '@/types/table';
import { and, asc, eq, gt } from 'drizzle-orm';
import Image from 'next/image';

type NextProjectProps = Pick<ProjectProps, 'name' | 'slug'> | undefined;

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = (await db.query.projectsTable.findFirst({
    where: eq(projectsTable.slug, slug),
  })) as ProjectProps;

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
        <section className="grid lg:grid-cols-2 pt-22 px-4 w-full">
          <div className="lg:col-start-2">
            <P>{project.description}</P>
          </div>
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
