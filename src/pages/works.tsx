import PrefetchLink from '@/components/prefetch-link';
import Wrapper from '@/components/wrapper';
import { useLoaderBar } from '@/hooks/use-loader-bar';
import useMeta from '@/hooks/use-meta';
import { QueryClient, QueryClientProvider, useSuspenseQuery } from '@tanstack/react-query';
import { ArrowUpRight } from 'lucide-react';

const queryClient = new QueryClient();

const Works = () => {
  useMeta({ title: 'Works' });
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
};

export default Works;

const Page = () => {
  const { start } = useLoaderBar();
  const { data } = useSuspenseQuery({
    queryKey: [`all-projects`],
    queryFn: () => import(`@/data/all-projects.json`).then((res) => res.default),
  });
  return (
    <>
      <Wrapper className="pb-14 lg:pb-18">
        <h1 className="col-span-full mt-14 lg:mt-16">
          <div className="highlight-line before:top-1.5 lg:before:top-3"></div>
          Creating next level digital products
        </h1>
        <p className="col-span-4 mt-10 lg:col-span-5 lg:mt-12">
          I’m passionate about creating innovative and high-quality projects. Here, you’ll find my work and featuring the latest projects.
        </p>
        <div className="col-span-full mt-14 grid gap-x-4 gap-y-12 lg:mt-18 lg:grid-cols-2">
          {data.map((project) => (
            <PrefetchLink to={`/project/${project.id}`} onClick={() => start()} className="group" key={`works-${project.id}`}>
              <div>
                <picture className="grid aspect-video overflow-hidden rounded-sm">
                  <img src={project.thumbnail} alt="" className="inset-0 aspect-video object-cover transition-transform group-hover:scale-105" />
                </picture>
                <div className="mt-2 flex items-center justify-between">
                  <p>{project.name}</p>
                  <ArrowUpRight />
                </div>
              </div>
            </PrefetchLink>
          ))}
        </div>
      </Wrapper>
    </>
  );
};
