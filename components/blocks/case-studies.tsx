import { db } from '@/lib/db';
import { projectsTable } from '@/lib/schema';
import { ProjectProps } from '@/types/table';
import { eq, sql } from 'drizzle-orm';
import H1 from '../h1';
import ProjectSquare from '../project-square';

export default function CaseStudies() {
  return (
    <div className="grid lg:grid-cols-2 pt-8 pb-16 lg:pb-24 px-4 w-full">
      <div className="lg:col-start-2">
        <H1 className="font-bold">Case studies</H1>
      </div>
      <div className="col-span-full mt-10">
        <ProjectsShowcase />
      </div>
    </div>
  );
}

const ProjectsShowcase = async () => {
  const projects: ProjectProps[] = await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.as, 'case_study'))
    .orderBy(sql`sequence asc`);
  return (
    <div className="grid grid-cols-2 gap-1">
      {projects.map((project) => (
        <ProjectSquare key={`project-${project.id}`} data={project} />
      ))}
    </div>
  );
};
