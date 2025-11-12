import { APP_NAME } from '@/data/defines';
import { useEffect } from 'react';

interface MetaInterface {
  title: string | null;
}

export default function useMeta({ title }: MetaInterface) {
  useEffect(() => {
    document.title = title ? `${title} - ${APP_NAME}` : APP_NAME;
  }, [title]);
  return;
}
