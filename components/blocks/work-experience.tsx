import ClientCldImage from '@/components/client-cld-image';
import H4 from '@/components/h4';
import ProjectSquare from '@/components/project-square';
import { db } from '@/lib/db';
import { ExperienceProps, ProjectProps } from '@/types/table';

export default async function WorkExperience() {
  // Fetch experiences data with projects info
  const experiences = (
    await db.query.experiencesTable.findMany({
      with: {
        experiencesToProjects: {
          with: {
            project: true,
          },
        },
      },
    })
  ).map((exp) => {
    const { experiencesToProjects, ...rest } = exp;
    return { ...rest, projects: experiencesToProjects.map((e) => e.project) as ProjectProps[] };
  });
  return (
    <div className="grid lg:grid-cols-2 px-4 py-6">
      <div>
        <H4 className="sticky top-14">Work Experience</H4>
      </div>
      <div className="space-y-14 mt-8 lg:mt-0">
        {experiences.map((experience) => (
          <Experience key={`experience-${experience.id}`} data={experience} />
        ))}
      </div>
    </div>
  );
}

const Experience = ({ data }: { data: ExperienceProps & { projects: ProjectProps[] } }) => {
  return (
    <div className="flex flex-col not-last:border-b not-last:pb-14">
      <div className="flex items-center gap-4 justify-between">
        <ClientCldImage
          src={`/images/companies/${data.thumbnail}`}
          alt={`${data.name} Logo`}
          width={80}
          height={80}
          loading="lazy"
          className="object-cover size-12 lg:size-17 rounded-lg lg:rounded-xl"
        />
        <div className="bg-secondary py-2 px-4 rounded-full">
          <p className="text-secondary-foreground font-semibold text-xs tracking-tight">
            {data.start_at.getFullYear()} - {data.end_at ? data.end_at.getFullYear() : 'Present'}
          </p>
        </div>
      </div>
      <div className="mt-4 lg:mt-5">
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-xs">{data.role}</p>
        <p className="mt-4 text-muted-foreground md:text-lg tracking-tight text-pretty">{data.description}</p>
        <div className="grid grid-cols-3 gap-2 mt-10">
          {data.projects.map((project) => (
            <ProjectSquare key={`project-square-${project.id}`} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
