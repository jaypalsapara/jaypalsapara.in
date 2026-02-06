import { lazy } from 'react';

export const Home = lazy(() => import('@/pages/home'));
export const About = lazy(() => import('@/pages/about'));
export const Contact = lazy(() => import('@/pages/contact'));
export const Project = lazy(() => import('@/pages/project'));
export const Works = lazy(() => import('@/pages/works'));
export const Ui = lazy(() => import('@/pages/ui'));
export const PageNotFound = lazy(() => import('@/pages/page-not-found'));
export const Changelog = lazy(() => import(`@/pages/changelog`));
