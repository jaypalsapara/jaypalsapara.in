import { db } from '@/lib/db';
import { projectsTable } from '@/lib/schema';
import { cn } from '@/lib/utils';
import { ProjectProps } from '@/types/table';
import { eq, sql } from 'drizzle-orm';
import H3 from '../h3';
import ProjectSquare from '../project-square';

export default function RecentWork() {
  return (
    <div className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
      <div className="lg:col-start-2">
        <H3 className="font-bold">Recent work</H3>
      </div>
      <div className="col-span-full mt-8">
        <ProjectsShowcase />
      </div>
    </div>
  );
}

const ProjectsShowcase = async () => {
  const projects: ProjectProps[] = await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.as, 'recent'))
    .orderBy(sql`sequence asc`);

  const totalProjects = projects.length;

  return (
    <div
      className={cn('grid grid-cols-2 gap-1', {
        'lg:grid-cols-3': totalProjects === 3,
        'lg:grid-cols-4': totalProjects === 4,
        'lg:grid-cols-3 xl:grid-cols-5': totalProjects === 5,
        'lg:grid-cols-4 xl:grid-cols-6': totalProjects >= 6,
      })}
    >
      {projects.map((project) => (
        <ProjectSquare key={`project-${project.id}`} data={project} />
      ))}
    </div>
  );
};
