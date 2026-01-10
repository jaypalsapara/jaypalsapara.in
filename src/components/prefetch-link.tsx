import { Link, useFetcher, useHref, type LinkProps } from 'react-router';

export default function PrefetchLink({ to, children, ...props }: LinkProps) {
  const fetcher = useFetcher();
  const href = useHref(to);
  const prefetch = () => {
    if (fetcher.state === 'idle') {
      fetcher.load(href);
    }
  };
  return (
    <Link to={to} onMouseEnter={prefetch} onFocus={prefetch} {...props}>
      {children}
    </Link>
  );
}
