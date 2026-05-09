import { NavLink, ReferenceLink } from '@/types/navigation';
import Link from 'next/link';
import H4 from './h4';

const email = 'hellojaypalsapara@gmail.com';

const socialLinks: ReferenceLink[] = [
  {
    name: 'Twitter',
    url: '#',
  },
  {
    name: 'GitHub',
    url: '#',
  },
  {
    name: 'LinkedIn',
    url: '#',
  },
];

export default function Footer({ navigation }: { navigation: NavLink }) {
  return (
    <footer className="min-h-screen flex flex-col border-t">
      <div className="px-4 py-28 grid grid-cols-2">
        <div>
          <H4 className="max-w-[18ch]">Reach out to connect or collaborate</H4>
          <H4 className="font-medium">
            <a href={'mailto:' + email} className="text-muted-foreground/50 hover:text-foreground transition-colors">
              {email}
            </a>
          </H4>
        </div>
        <div>
          {socialLinks.map((item) => (
            <H4 className="font-bold " key={`social-link-wrapper-${item.name}`}>
              <a href={item.url} className="text-foreground hover:text-muted-foreground/50 transition-colors">
                {item.name}
              </a>
            </H4>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 grow relative">
        <div className="pt-10 px-6">
          <Link href={navigation.path} className="text-7xl tracking-tighter font-bold top-0">
            <span className="absolute inset-0"></span>
            <span className="font-normal">Next—</span>
            {navigation.name}
          </Link>
        </div>
      </div>
    </footer>
  );
}
