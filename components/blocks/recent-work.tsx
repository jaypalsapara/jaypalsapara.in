import { db } from '@/lib/db';
import { projectsTable } from '@/lib/schema';
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
  return (
    <div className="grid grid-cols-6 gap-1">
      {projects.map((project) => (
        <ProjectSquare key={`project-${project.id}`} data={project} />
      ))}
    </div>
  );
};
