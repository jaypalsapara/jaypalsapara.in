import FloatingImages from '@/components/floating-images';
import SectionBadge from '@/components/section-badge';
import SectionContent from '@/components/section-content';
import SectionHeader from '@/components/sectoin-header';
import Wrapper from '@/components/wrapper';
import Projects from '@/data/featured-work.json';
import { ArrowUpRight, Folders } from 'lucide-react';
import { Link } from 'react-router';

const FeaturedProject = () => {
  const thumbnails = Projects.map((project) => project.thumbnail);
  return (
    <>
      <SectionBadge Icon={Folders} title="Work" />
      <SectionHeader
        title="Featured projects"
        description="Here is my favorite project that truly showcases my skills, creativity, and potential in the best way possible."
      />
      {/* Projects */}
      <SectionContent className="mt-14 lg:mt-18 lg:has-[:hover]:*:not-hover:text-muted-foreground">
        {Projects.map((data, index) => (
          <Link to={`project/${data.id}`} key={`featured-project-${data.name}`} className="peer floating-trigger not-first:*:border-t">
            <Wrapper className="items-center py-5 lg:py-9 lg:transition-colors lg:hover:bg-muted/25">
              <p className="col-span-1 hidden lg:block">{index + 1}</p>
              <h3 className="col-span-3 truncate lg:col-span-7">{data.name}</h3>
              <p className="col-span-3 hidden lg:block">{data.type}</p>
              <div className="-col-end-1 flex justify-end">
                <ArrowUpRight />
              </div>
            </Wrapper>
          </Link>
        ))}
        <FloatingImages thumbnails={thumbnails} />
      </SectionContent>
    </>
  );
};

export default FeaturedProject;
