import ClientCldImage from '@/components/client-cld-image';
import Footer from '@/components/footer';
import H1 from '@/components/h1';
import P from '@/components/p';
import { APP_URL } from '@/constants/app';
import { getGenerateStaticParams, getNextProjectFromProject, getProjectWhereSlug } from '@/dal/project-dal';
import { cn } from '@/lib/utils';
import { ProjectProps, ShowcaseProps } from '@/types/table';
import Head from 'next/head';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const projects = await getGenerateStaticParams();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = await getProjectWhereSlug(slug);

  if (!project) return notFound();

  const nextProject = await getNextProjectFromProject(project);

  return (
    <>
      <main className="flex w-full flex-1 flex-col relative">
        <Head>
          <link rel="canonical" href={APP_URL + `/work/${slug}`} key="canonical" />
        </Head>
        <section className="grid lg:grid-cols-2 pt-8 pb-6 lg:pb-8 px-4 w-full">
          <div className="lg:col-start-2 flex justify-between gap-4">
            <H1 className="font-bold">{project.name}</H1>
            <P className="self-end text-muted-foreground/50">{project.started_at.getFullYear()}</P>
          </div>
        </section>
        <section className="px-4 mt-2 lg:mt-4">
          <ClientCldImage
            src={`/images/projects/${project.slug}/${project.cover}`}
            width={3840}
            height={2160}
            alt={`${project.name} Cover`}
            preload
            className="aspect-video object-cover rounded-lg lg:rounded-xl w-full"
          />
        </section>
        <section className="grid lg:grid-cols-2 py-14 lg:py-22 px-4 w-full">
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
        <Footer
          navigation={{ name: nextProject.name, path: `/work/${nextProject.slug}` }}
          cover={`/images/projects/${nextProject.slug}/${nextProject.footer_cover}`}
        />
      ) : (
        <Footer navigation={{ name: 'Service', path: '/service' }} cover={`/images/services-footer-cover.png`} />
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
      <div className="space-y-1">
        {showcase.images.map((_, i) => (
          <div
            key={`showcase-${showcase.id}-block-${i}`}
            className={cn('grid gap-1', {
              'lg:grid-cols-2': _.length == 2,
              'lg:grid-cols-3': _.length >= 3,
            })}
          >
            {_.map((image) => (
              <ClientCldImage
                key={`showcase-${showcase.id}-image-${image.name}`}
                src={`/images/projects/${project.slug}/${image.name}`}
                width={image.resolution.w}
                height={image.resolution.h}
                alt={`${image.name}`}
                loading="lazy"
                className={cn('object-cover rounded-lg lg:rounded-xl w-full', {
                  'aspect-video': image.ratio === '16:9',
                  'aspect-3/2': image.ratio === '3:2',
                })}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
