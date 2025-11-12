import SectionBadge from '@/components/section-badge';
import SectionContent from '@/components/section-content';
import SectionHeader from '@/components/sectoin-header';
import Wrapper from '@/components/wrapper';
import { Info } from 'lucide-react';

const OverviewAbout = () => {
  return (
    <>
      <SectionBadge Icon={Info} title="Information" />
      <SectionHeader title="Know more" description="A few details that define me and my journey and get to know me a little better through this snapshot." />
      <SectionContent className="mt-6 mb-14 lg:mt-18 lg:mb-18">
        <Wrapper className="gap-x-0 px-0 lg:gap-x-0 lg:px-0">
          <p className="pad-x col-span-8">
            Hi, I’m Jaypal Sapara! I pursued a <strong className="font-medium">Bachelor’s degree in Computer Applications</strong> (In 2020) and{' '}
            <strong className="font-medium">I absolutely love coding</strong> — it’s both my passion and my creative outlet. Outside of coding, I enjoy{' '}
            <strong className="font-medium">gaming, drawing, and dancing,</strong> which help me stay happy. <br /> <br /> I’m based in{' '}
            <strong className="font-medium">Surendranagar, Gujarat, India,</strong> and I’m comfortable communicating in{' '}
            <strong className="font-medium">English, Hindi, and Gujarati.</strong> I’m always excited to learn, create, and explore new ideas through
            technology.
          </p>
        </Wrapper>
      </SectionContent>
    </>
  );
};

export default OverviewAbout;
