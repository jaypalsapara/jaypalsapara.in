import { db } from '@/lib/db';
import { CurrentProjectProps } from '@/types/dal';

export async function getCoverProject() {
  return await db.query.projectsTable.findFirst({
    where: {
      slug: 'bet-fqri',
    },
    columns: {
      slug: true,
      name: true,
      footer_cover: true,
    },
  });
}

export async function getCaseStudyProjects() {
  return await db.query.projectsTable.findMany({
    where: {
      as: 'case_study',
    },
    orderBy: {
      sequence: 'asc',
    },
  });
}

export async function getRecentProjects() {
  return await db.query.projectsTable.findMany({
    where: {
      as: 'recent',
    },
    orderBy: {
      sequence: 'asc',
    },
  });
}

export async function getGenerateStaticParams() {
  return await db.query.projectsTable.findMany({
    columns: {
      id: true,
      slug: true,
    },
  });
}

export async function getProjectWhereSlug(slug: string) {
  return await db.query.projectsTable.findFirst({
    where: {
      slug: slug,
    },
    with: {
      showcase: true,
    },
  });
}

export async function getNextProjectFromProject(project: CurrentProjectProps) {
  return await db.query.projectsTable.findFirst({
    where: {
      AND: [
        {
          as: project.as,
        },
        {
          sequence: {
            gt: project.sequence,
          },
        },
      ],
    },
    orderBy: {
      sequence: 'asc',
    },
    columns: {
      slug: true,
      name: true,
      cover: true,
      footer_cover: true,
    },
  });
}
