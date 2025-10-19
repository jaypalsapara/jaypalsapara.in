import OverflowLine from '@/components/overflow-line';
import Wrapper from '@/components/wrapper';
import { QueryClient, QueryClientProvider, useSuspenseQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router';

const queryClient = new QueryClient();

type DetailProps = {
  title: string;
  text: string;
};

type MediaProps = {
  url: string;
};

const Project = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
};

export default Project;

const Page = () => {
  const { id } = useParams();
  const { data } = useSuspenseQuery({
    queryKey: [`project_${id}`],
    queryFn: () => import(`@/data/projects/${id}.json`).then((res) => res.default),
  });

  const { data: AllProjects } = useSuspenseQuery({
    queryKey: [`all-projects`],
    queryFn: () => import(`@/data/all-projects.json`).then((res) => res.default),
  });

  const nextProject = AllProjects.at(AllProjects.findIndex((project) => project.id === id) + 1) || AllProjects.at(0);

  return (
    <>
      <Wrapper className="pb-14 lg:pb-18">
        <h1 className="col-span-full mt-14 lg:mt-16">
          <div className="highlight-line before:top-1.5 lg:before:top-3"></div>
          {data.title}
        </h1>
        <p className="col-span-4 mt-10 text-muted-foreground lg:col-span-6 lg:mt-12" dangerouslySetInnerHTML={{ __html: data.description }} />
        <div className="col-span-full mt-10 flex flex-col gap-x-12 gap-y-6 lg:mt-12 lg:flex-row">
          {data.details.map((detail: DetailProps) => (
            <div key={`detail-${id}-${detail.title}`}>
              <p className="font-medium">{detail.title}</p>
              <p className="text-muted-foreground">{detail.text}</p>
            </div>
          ))}
        </div>
        <div className="col-span-full mt-14 min-h-96 lg:mt-18">
          {data.media.map((media: MediaProps) => (
            <picture className="block rounded-xs border" key={`media-${media.url}`}>
              <img src={media.url} alt="" className="w-full" loading="lazy" />
            </picture>
          ))}
        </div>
      </Wrapper>
      <OverflowLine />
      {nextProject && (
        <div className="pad-x py-8 lg:py-12">
          <Link to={`/project/${nextProject.id}`}>
            <h2>
              <span className="text-muted-foreground/60">Next.</span> {nextProject.name}
            </h2>
          </Link>
        </div>
      )}
    </>
  );
};
