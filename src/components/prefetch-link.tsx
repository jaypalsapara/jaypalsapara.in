import { Link, useFetcher, useHref, type LinkProps } from 'react-router';

export default function PrefetchLink({ to, children, interaction = true, ...props }: LinkProps & { interaction?: boolean }) {
  const fetcher = useFetcher();
  const href = useHref(to);
  const prefetch = () => {
    if (!interaction) return;
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
