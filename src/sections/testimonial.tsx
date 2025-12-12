import SectionBadge from '@/components/section-badge';
import SectionContent from '@/components/section-content';
import SectionHeader from '@/components/sectoin-header';
import Wrapper from '@/components/wrapper';
import Testimonials from '@/data/testimonials.json';
import { MessageSquareText, Star } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const Testimonial = () => {
  return (
    <>
      <SectionBadge Icon={MessageSquareText} title="Testimonial" />
      <SectionHeader
        title="Trusted by clients, startups, and enterprises"
        description="What clients say about my work, and I would be truly happy to see you here, exploring the quality and dedication I bring to every project."
      />
      <SectionContent className="mb-14 lg:mb-18">
        <Wrapper className="gap-y-6 lg:gap-x-6">
          {Testimonials.map((data, index) => (
            <div
              key={`testimonial-${index}`}
              className={twMerge(
                'col-span-4 flex flex-col gap-4 rounded-xs border p-5',
                data.is_highlight
                  ? 'row-span-2 border-[oklch(0.2202_0_0)] bg-[oklch(0.2202_0_0)] shadow-real dark:border-border dark:shadow-none'
                  : 'shadow-xs',
              )}
            >
              <div className="mt-1.5 flex">
                {Array.from({ length: data.rating }).map((_, i) => (
                  <Star key={`testimonial-rating-${index}-${i}`} className={twMerge('fill-accent stroke-accent', data.is_highlight ? '' : '')} />
                ))}
              </div>
              <p className={twMerge(data.is_highlight ? 'text-lg text-background dark:text-foreground' : '')}>
                <q>{data.review}</q>
              </p>
              <div></div>
              <div className="mt-auto flex items-center justify-between">
                <div className="grid">
                  <small className={twMerge('font-medium', data.is_highlight ? 'text-background dark:text-foreground' : '')}>{data.user.name}</small>
                  <small className={twMerge('text-muted-foreground', data.is_highlight ? 'text-[oklch(70.8%_0_0)]' : '')}>{data.type}</small>
                </div>
                <picture className="grid size-11 place-content-center overflow-hidden rounded-xs bg-muted text-muted-foreground">
                  {data.user.avatar ? <img src={data.user.avatar} alt={data.user.avatar} className="inset-0 object-cover" /> : data.user.sort_name}
                </picture>
              </div>
            </div>
          ))}
        </Wrapper>
      </SectionContent>
    </>
  );
};

export default Testimonial;
