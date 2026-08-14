import { PrefetchImagesTypes } from './props';

export interface NavLink {
  name: string;
  path: string;
  prefetchImages?: PrefetchImagesTypes;
}

export type ReferenceLink = {
  name: string;
  url: string;
};
