import SectionBadge from '@/components/section-badge';
import SectionHeader from '@/components/sectoin-header';
import Wrapper from '@/components/wrapper';
import { Smile } from 'lucide-react';

const Journey = () => {
  return (
    <>
      <SectionBadge Icon={Smile} title="Story" />
      <SectionHeader
        title="Journey to become a developer"
        description="How I find my creative playground where imagination meets logic. It's where I bring ideas to life, line by line."
      />
      <Wrapper className="mb-18">
        <p className="col-span-6 mt-16">
          My story begins when I finished school. I have been interested in computers since childhood, so I was clear about what I wanted to do, so I took BCA
          in college. I learned different subjects in college but my interest was more in web development, so I only focused on that.
          <br />
          <br />
          College ended in 2020 and the COVID-19 pandemic started, so I could not join any company but at that time I learned another skill which was my hobby,
          yes I am talking about photo editing. I can say that this skill also proved very useful to me in web development. As time passed, people started
          returning to work and I joined the company in 2022. I made many good friends in that company, learned something from them, and taught them something.
        </p>
      </Wrapper>
    </>
  );
};

export default Journey;
