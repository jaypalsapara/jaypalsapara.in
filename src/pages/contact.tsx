import Wrapper from '@/components/wrapper';
import { EMAIL, FIVERR_URL, UPWORK_URL } from '@/data/defines';
import SocialLinks from '@/data/social-links.json';

export default function Contact() {
  return (
    <Wrapper className="pb-14 lg:pb-18">
      <h1 className="col-span-full mt-14 lg:mt-16 text-pretty">
        <div className="highlight-line before:-top-0.5 lg:before:top-3"></div>
        Let’s create something great
      </h1>
      <p className="col-span-4 mt-10 lg:col-span-5 lg:mt-12">Whether it’s a new idea or an existing product, I’m always open to meaningful collaborations.</p>

      <div className="col-span-full mt-14 grid grid-cols-subgrid lg:mt-18 space-y-24">
        <div className="col-span-4 lg:col-span-6 space-y-12 *:flex *:flex-col *:gap-2">
          <div>
            <p className="text-muted-foreground">Contact Details</p>
            <a href={'mailto:' + EMAIL} target="_blank" className="max-w-fit text-lg hover:underline">
              {EMAIL}
            </a>
          </div>
        </div>
        {/* Other */}
        <div className="col-span-4 lg:col-span-6 space-y-12 *:flex *:flex-col *:gap-2">
          <div>
            <p className="text-muted-foreground">Hire me on platform</p>
            <div className="flex gap-4">
              <a href={UPWORK_URL} target="_blank" className="max-w-fit text-lg hover:underline">
                Upwork
              </a>
              <a href={FIVERR_URL} target="_blank" className="max-w-fit text-lg hover:underline">
                Fiverr
              </a>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground">Location</p>
            <p className="text-lg">Surendranagar, Gujarat, IN.</p>
          </div>
          <div>
            <p className="text-muted-foreground">Social</p>
            <div className="flex flex-col gap-4">
              {SocialLinks.map((social) => (
                <a href={social.url} target="_blank" rel="noopener noreferrer" className="group max-w-fit text-lg hover:underline" key={`social-${social.name}`}>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
