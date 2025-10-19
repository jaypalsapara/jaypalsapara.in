import OverflowLine from '@/components/overflow-line';
import Wrapper from '@/components/wrapper';
import Achievement from '@/sections/achievement';
import Experience from '@/sections/experience';
import OverviewAbout from '@/sections/overview-about';

const About = () => {
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
          <img src="/images/me/me-1.webp" alt="" className="col-span-full w-full rounded-xs object-cover object-top lg:aspect-video" />
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
