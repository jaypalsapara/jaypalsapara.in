import H4 from '@/components/h4';
import P from '@/components/p';

export default function Info() {
  return (
    <div className="grid lg:grid-cols-2 px-4 py-6">
      <div className="hidden lg:block">
        <H4 className="sticky top-14">Info</H4>
      </div>
      <div className="*:text-xl md:*:text-2xl lg:*:text-[1.625rem] *:leading-tight xl:*:leading-[1.2] xl:*:text-3xl *:tracking-tight space-y-6">
        <P>
          Jaypal is a developer based in Gujarat, India. His work spans web and mobile applications—always with a focus
          on building coherent brand experiences.
        </P>
        <P>
          Over the years, he has worked with companies, startups, and clients to strengthen their brand credibility,
          drive growth, and attract new customers, consistently delivering results that exceeded expectations and earned
          their trust.
        </P>
        <P>
          Throughout his career, Jaypal has worked across SaaS, CMS, E-commerce, APIs, Directory, Blogs, and Customs.
        </P>
      </div>
    </div>
  );
}
