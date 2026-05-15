import H4 from '@/components/h4';
import ProjectSquare from '@/components/project-square';
import { db } from '@/lib/db';
import { ExperiencesProps, ProjectsProps } from '@/types/table';
import Image from 'next/image';

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
    return { ...rest, projects: experiencesToProjects.map((e) => e.project) as ProjectsProps[] };
  });
  return (
    <div className="grid lg:grid-cols-2 px-4 py-6">
      <div>
        <H4 className="sticky top-14">Work Experience</H4>
      </div>
      <div>
        {experiences.map((experience) => (
          <Experience key={`experience-${experience.id}`} data={experience} />
        ))}
      </div>
    </div>
  );
}

const Experience = ({ data }: { data: ExperiencesProps & { projects: ProjectsProps[] } }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4 justify-between">
        <Image
          src={`/images/companies/${data.thumbnail}`}
          alt={`${data.name} Logo`}
          width={80}
          height={80}
          priority
          className="object-cover size-17 rounded-xl"
        />
        <div className="bg-secondary py-2 px-4 rounded-full">
          <p className="text-secondary-foreground font-semibold text-xs tracking-tight">
            {data.start_at.getFullYear()} - {data.end_at ? data.end_at.getFullYear() : 'Present'}
          </p>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-xs">{data.role}</p>
        <p className="mt-4 text-muted-foreground text-lg tracking-tight text-pretty">{data.description}</p>
        <div className="grid grid-cols-3 gap-2 mt-10">
          {data.projects.map((project) => (
            <ProjectSquare key={`project-square-${project.id}`} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
