import { NavLink, ReferenceLink } from '@/types/navigation';
import Image from 'next/image';
import Link from 'next/link';
import H4 from './h4';

const email = 'hellojaypalsapara@gmail.com';

const socialLinks: ReferenceLink[] = [
  {
    name: 'Twitter',
    url: 'https://x.com/jaypal__sapara',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/jaypalsapara',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jaypalsapara',
  },
];

export default function Footer({ navigation, cover }: { navigation: NavLink; cover?: string }) {
  return (
    <footer className="min-h-screen flex flex-col border-t">
      <div className="px-4 py-16 lg:py-28 grid lg:grid-cols-2 gap-y-6">
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
      <div className="bg-gray-100 grid grow grid-stack overflow-hidden isolate group/next">
        {cover && (
          <Image
            width={3840}
            height={2160}
            loading="lazy"
            src={cover}
            alt={cover}
            className="stack size-full -z-1 group-hover/next:scale-[1.01] scale-102 transition-[scale,filter] duration-300 will-change-[scale,filter] ease-in-out brightness-100 group-hover/next:brightness-80 object-cover place-self-center"
          />
        )}
        <div className="pt-10 px-6 z-10">
          <Link href={navigation.path} className="text-5xl lg:text-6xl xl:text-7xl tracking-tighter font-bold top-0">
            <span className="absolute inset-0"></span>
            <span className="font-normal">Next — </span>
            {navigation.name}
          </Link>
        </div>
      </div>
    </footer>
  );
}
