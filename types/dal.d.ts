import { ProjectProps, ShowcaseProps } from './table';

type CoverProjectProps = Pick<ProjectProps, 'name' | 'slug' | 'footer_cover'>;

type CurrentProjectProps = ProjectProps & { showcase: ShowcaseProps[] };

type NextProjectProps = Pick<ProjectProps, 'name' | 'slug' | 'cover' | 'footer_cover'> | undefined;
