import Badge from '@/components/badge';
import FooterClock from '@/components/footer-clock';
import Jaypal from '@/components/jaypal';
import SVG from '@/components/svg';
import Wrapper from '@/components/wrapper';
import { EMAIL, UPWORK_URL } from '@/data/defines';
import SocialLinks from '@/data/social-links.json';
import '@/styles/jaypal.css';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer>
      <Wrapper className="pt-18">
        {/* Col-1 */}
        <div className="col-span-4 lg:col-span-6">
          <p className="max-w-lg text-muted-foreground">Let's connect and embark on an exciting web development journey together!</p>
          <div className="mt-4 lg:max-w-md">
            <a
              href={'mailto:' + EMAIL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-b py-4 font-medium transition-colors hover:border-foreground hover:text-foreground lg:py-2.5"
            >
              {EMAIL} <ArrowUpRight />
            </a>
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-b py-4 font-medium transition-colors hover:border-foreground hover:text-foreground lg:py-2.5"
            >
              Hire me on upwork <ArrowUpRight />
            </a>
          </div>
          <div className="mt-14 -ml-1 flex flex-wrap gap-4">
            {SocialLinks.map((social) => (
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="group" key={`social-${social.name}`}>
                <SVG src={social.icon} className="size-8 fill-muted-foreground/60 transition-colors group-hover:fill-foreground" />
              </a>
            ))}
          </div>
          <p className="mt-14 text-muted-foreground">
            © {new Date().getFullYear()} Jaypal Sapara
            <br />
            Built by me. Inspired by the{' '}
            <a href="https://laravel.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              Laravel
            </a>{' '}
            ecosystem
          </p>
        </div>
        {/* Col-2 */}
        <div className="col-span-4 mt-14 lg:col-span-2 lg:mt-0">
          <ul className="space-y-3 text-muted-foreground">
            <li className="font-medium text-foreground">Pages</li>
            <li>
              <Link to={'/'} className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/about'} className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to={'/works'} className="hover:text-foreground">
                Works
              </Link>
            </li>
            <li>
              Art Gallery <Badge variant="secondary" children="Soon" />
            </li>
            <li>
              <Link to={'/changelog'} className="hover:text-foreground">
                Changelog
              </Link>
            </li>
            <li>
              <Link to={'/ui'} className="hover:text-foreground">
                UI System
              </Link>
            </li>
          </ul>
        </div>
        {/* Col-3 */}
        <div className="col-span-4 mt-14 lg:col-span-2 lg:mt-0">
          <ul className="space-y-3 text-muted-foreground">
            <li className="font-medium text-foreground">Contribute</li>
            <li>
              <a
                href="https://github.com/jaypalsapara/jaypalsapara.in/issues/new?template=1-bug-report.yml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                Report an bug
              </a>
            </li>
          </ul>
        </div>
        {/* Col-4 */}
        <div className="col-span-4 mt-14 lg:col-span-2 lg:mt-0">
          <ul className="space-y-3 text-muted-foreground">
            <FooterClock />
          </ul>
        </div>
        <div className="col-span-full mt-18">
          <Jaypal />
        </div>
      </Wrapper>
    </footer>
  );
}
