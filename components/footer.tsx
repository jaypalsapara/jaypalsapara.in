import { cn } from '@/lib/utils';
import { NavLink, ReferenceLink } from '@/types/navigation';
import Image from 'next/image';
import H4 from './h4';
import TransitionLink from './transition-link';

const email = 'hellojaypalsapara@gmail.com';

export const SocialLinks: ReferenceLink[] = [
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

export default function Footer({
  navigation,
  cover,
  textColor = 'black',
}: {
  navigation: NavLink;
  cover?: string;
  textColor?: 'white' | 'black';
}) {
  return (
    <footer className="h-screen flex flex-col border-t">
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
          {SocialLinks.map((item) => (
            <H4 className="font-bold h-9 lg:h-auto" key={`social-link-wrapper-${item.name}`}>
              <a href={item.url} className="text-foreground hover:text-muted-foreground/50 transition-colors">
                {item.name}
              </a>
            </H4>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 grow pile overflow-hidden isolate group/next relative">
        {cover && (
          <Image
            width={3840}
            height={1860}
            loading="lazy"
            src={cover}
            alt={cover}
            className="absolute size-full object-center -z-1 group-hover/next:scale-[1.01] scale-103 transition-[scale,filter] duration-300 will-change-[scale,filter] ease-in-out brightness-100 group-hover/next:brightness-78 object-cover"
          />
        )}
        <div className="pt-10 px-6 z-10 self-start justify-self-start">
          <TransitionLink
            href={navigation.path}
            className={cn('text-5xl lg:text-6xl xl:text-7xl tracking-tighter font-bold top-0', {
              'text-black': textColor === 'black',
              'text-white': textColor === 'white',
            })}
          >
            <span className="absolute inset-0"></span>
            <span className="font-normal">Next — </span>
            {navigation.name}
          </TransitionLink>
        </div>
      </div>
    </footer>
  );
}
