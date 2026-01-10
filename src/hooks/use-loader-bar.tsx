import LoaderBarContext from '@/contexts/loader-bar-context';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';

export const useLoaderBar = () => {
  const { pathname } = useLocation();
  const ctx = useContext(LoaderBarContext);

  if (!ctx) throw new Error('useLoaderBar must be used within LoaderBarContext Provider');

  useEffect(() => {
    ctx.complete();
  }, [pathname, ctx]);

  return {
    start: ctx.start,
    complete: ctx.complete,
  };
};
