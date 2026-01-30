import { NavLink, useFetcher, useHref, type NavLinkProps } from 'react-router';

export default function PrefetchNavLink({ to, children, interaction = true, ...props }: NavLinkProps & { interaction?: boolean }) {
  const fetcher = useFetcher();
  const href = useHref(to);
  const prefetch = () => {
    if (!interaction) return;
    if (fetcher.state === 'idle') {
      fetcher.load(href);
    }
  };
  return (
    <NavLink to={to} onMouseEnter={prefetch} onFocus={prefetch} {...props}>
      {children}
    </NavLink>
  );
}
