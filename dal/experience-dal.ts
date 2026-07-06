import { db } from '@/lib/db';
import { ProjectProps } from '@/types/table';

export async function getExperiences() {
  return (
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
}
