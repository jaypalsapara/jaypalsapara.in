import OverflowLine from '@/components/overflow-line';
import FeaturedProject from '@/sections/featured-project';
import HeroSection from '@/sections/hero';
import Overview from '@/sections/overview';
import ReadyToBuild from '@/sections/ready-to-build';
import Services from '@/sections/services';
import TechStack from '@/sections/tech-stack';
import Technologies from '@/sections/technologies';
import Testimonial from '@/sections/testimonial';

const Home = () => {
  return (
    <>
      <HeroSection />
      <OverflowLine className="hidden lg:block" />
      <Overview />
      <OverflowLine />
      <FeaturedProject />
      <OverflowLine />
      <Technologies />
      <OverflowLine />
      <Services />
      <OverflowLine />
      <Testimonial />
      <OverflowLine />
      <ReadyToBuild />
      <OverflowLine />
      <TechStack />
    </>
  );
};

export default Home;
