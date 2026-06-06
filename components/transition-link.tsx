'use client';

import { useTransitionRouter } from 'next-view-transitions';
import Link, { LinkProps } from 'next/link';

type TransitionLinkProps = React.PropsWithChildren<
  LinkProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>
>;

export default function TransitionLink({ children, ...props }: TransitionLinkProps) {
  const router = useTransitionRouter();
  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        router.push(props.href.toString());
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
