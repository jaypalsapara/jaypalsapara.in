import H4 from '@/components/h4';
import P from '@/components/p';

export default function Info() {
  return (
    <div className="grid lg:grid-cols-2 px-4 py-6">
      <div className="hidden lg:block">
        <H4 className="sticky top-14">Info</H4>
      </div>
      <div className="*:text-xl md:*:text-2xl lg:*:text-[1.625rem] *:leading-tight xl:*:leading-[1.2] xl:*:text-3xl  space-y-6">
        <P>
          Jaypal is a developer based in Gujarat, India, focused on designing and developing web applications that drive
          real business results. His work spans web and mobile applications, with a strong focus on performance,
          security, responsive interfaces, and clean, maintainable code.
        </P>
        <P>
          Over the years, he has worked with companies, startups, and clients to turn ideas into reliable digital
          products. He helps businesses strengthen their digital presence, streamline processes, reach new customers,
          and build products ready to grow.
        </P>
        <P>
          His experience covers SaaS, CMS, e-commerce, directories, blogs, REST APIs, and custom web applications. He
          works on both new products and existing codebases, from building from scratch to improving performance and
          preparing applications to scale.
        </P>
        <P>
          Jaypal believes good development goes beyond writing code. It means understanding the problem, choosing the
          right architecture, communicating clearly, and building solutions that remain reliable and maintainable long
          after launch.
        </P>
      </div>
    </div>
  );
}
