import OverflowLine from '@/components/overflow-line';
import Wrapper from '@/components/wrapper';
import useMeta from '@/hooks/use-meta';
import Achievement from '@/sections/achievement';
import Experience from '@/sections/experience';
import OverviewAbout from '@/sections/overview-about';

const About = () => {
  useMeta({ title: 'About' });

  return (
    <>
      <Wrapper className="pb-14 lg:pb-18">
        <h1 className="col-span-full mt-14 lg:mt-16">
          <div className="highlight-line before:top-1.5 lg:before:top-3"></div>
          It’s me, <span className="text-accent">Jaypal Sapara.</span> Always excited to learn new things in the computer world.
        </h1>
        <p className="col-span-4 mt-10 lg:col-span-5 lg:mt-12">
          Over the past 3 years, as a web developer, I've worked with companies and clients to successfully help them reach their full potential and attract new
          customers
        </p>
        <div className="col-span-full mt-14 grid grid-cols-subgrid lg:mt-16">
          <picture className="relative col-span-6">
            <span className="absolute top-0 right-0 z-10 m-4 block size-4 rounded-xs border-t-2 border-r-2 border-accent"></span>
            <source srcSet="/images/about/img-1_mobile.avif" media="(width < 64rem)" />
            <img src="/images/about/img-1.avif" alt="" className="aspect-9/16 lg:aspect-4/5 w-full rounded-xs object-cover object-top grayscale transition-[filter]" />
          </picture>
          <picture className="relative col-span-6 hidden lg:block">
            <span className="absolute top-0 right-0 z-10 m-4 block size-4 rounded-xs border-t-2 border-r-2 border-accent"></span>
            <img src="/images/about/img-2.avif" alt="" className="aspect-4/5 w-full rounded-xs object-cover object-top grayscale transition-[filter]" />
          </picture>
        </div>
      </Wrapper>
      <OverflowLine />
      <Achievement />
      <OverflowLine />
      <Experience />
      <OverflowLine />
      <OverviewAbout />
    </>
  );
};

export default About;
