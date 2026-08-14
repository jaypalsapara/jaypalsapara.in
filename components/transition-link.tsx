'use client';

import { prefetchImage } from '@/lib/utils';
import { PrefetchImagesTypes } from '@/types/props';
import { sendGTMEvent } from '@next/third-parties/google';
import { useTransitionRouter } from 'next-view-transitions';
import Link, { LinkProps } from 'next/link';

type TransitionLinkProps = React.PropsWithChildren<
  LinkProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & { prefetchImages?: PrefetchImagesTypes }
>;

export default function TransitionLink({ children, prefetchImages, ...props }: TransitionLinkProps) {
  const router = useTransitionRouter();

  const handleMouseEnter = () => {
    if (!prefetchImages) return;

    const images = Array.isArray(prefetchImages) ? prefetchImages : [prefetchImages];

    images.forEach((img) => prefetchImage(img));
  };

  return (
    <Link
      onMouseEnter={handleMouseEnter}
      onClick={(e) => {
        e.preventDefault();
        router.push(props.href.toString());
        sendGTMEvent({ event: 'page_view', location: props.href.toString() });
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
