import Wrapper from '@/components/wrapper';
import useMeta from '@/hooks/use-meta';
import '@/styles/timeline.css';
import { QueryClient, QueryClientProvider, useSuspenseQuery } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Changelog() {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
}

const Page = () => {
  useMeta({ title: 'Changelog' });
  const { data } = useSuspenseQuery({
    queryKey: [`changelog`],
    queryFn: () => import(`@/data/changelog.json`).then((res) => res.default),
  });
  return (
    <>
      <Wrapper className="pb-14 lg:pb-18">
        <h1 className="col-span-full mt-14 lg:mt-16">
          <div className="highlight-line before:top-1.5 lg:before:top-3"></div>
          Changelog
        </h1>
        <p className="col-span-4 mt-10 lg:col-span-5 lg:mt-12">
          Stay informed with the latest updates, fixes, and features of my website. I provide clear and concise release notes to enhance your experience.
        </p>
        <div className="timeline col-span-full mt-14 lg:mt-18">
          {data.map((log) => (
            <div className="timeline-block" key={`log-${log.datetime}`}>
              <p className="timeline-title max-w-[32ch] text-sm font-medium text-pretty">{log.title}</p>
              <div className="mt-2 grid text-muted-foreground">
                {log.body.map((point, pointIndex) => (
                  <small key={`log-${log.datetime}-point-${pointIndex}`} className="max-w-[50ch] text-pretty">
                    {point}
                  </small>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};
