import { db } from '@/lib/db';
import { projectsTable } from '@/lib/schema';
import { CoverProjectProps, CurrentProjectProps } from '@/types/dal';
import { and, asc, eq, gt, sql } from 'drizzle-orm';

export async function getCoverProject() {
  return (await db.query.projectsTable.findFirst({
    where: eq(projectsTable.slug, 'bet-fqri'),
    columns: {
      slug: true,
      name: true,
      footer_cover: true,
    },
  })) as CoverProjectProps;
}

export async function getCaseStudyProjects() {
  return await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.as, 'case_study'))
    .orderBy(sql`sequence asc`);
}

export async function getRecentProjects() {
  return await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.as, 'recent'))
    .orderBy(sql`sequence asc`);
}

export async function getGenerateStaticParams() {
  return await db
    .select({
      id: projectsTable.id,
      slug: projectsTable.slug,
    })
    .from(projectsTable);
}

export async function getProjectWhereSlug(slug: string) {
  return await db.query.projectsTable.findFirst({
    where: eq(projectsTable.slug, slug),
    with: {
      showcase: true,
    },
  });
}

export async function getNextProjectFromProject(project: CurrentProjectProps) {
  return await db.query.projectsTable.findFirst({
    where: and(eq(projectsTable.as, project.as), gt(projectsTable.sequence, project.sequence)),
    orderBy: asc(projectsTable.sequence),
    columns: {
      slug: true,
      name: true,
      cover: true,
      footer_cover: true,
    },
  });
}
