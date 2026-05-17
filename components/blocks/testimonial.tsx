import { db } from '@/lib/db';
import { cn } from '@/lib/utils';
import { TestimonialProps } from '@/types/table';
import Image from 'next/image';
import H4 from '../h4';
import P from '../p';
import RatingStars from '../rating-stars';

export default function Testimonial() {
  return (
    <div className="px-4 py-6 grid lg:grid-cols-2">
      <div>
        <H4 className="sticky top-14">Testimonials</H4>
      </div>
      <div className="@container">
        <Testimonials />
      </div>
    </div>
  );
}

const Testimonials = async () => {
  const testimonials: TestimonialProps[] = await db.query.testimonialsTable.findMany();
  return (
    <div className="grid @2xl:grid-cols-2 gap-x-4 gap-y-6">
      {testimonials.map((testimonial) => (
        <div
          key={`testimonial-${testimonial.id}`}
          className={cn('flex flex-col bg-muted p-4 rounded-lg', {
            'row-span-2 bg-foreground text-white': testimonial.is_highlighted,
          })}
        >
          <div className="flex">
            <RatingStars rating={testimonial.rating} />
          </div>
          <P className="mt-4 text-sm lg:text-base xl:text-lg">
            <q>{testimonial.description}</q>
          </P>
          <div className="flex justify-between mt-auto pt-4">
            <div className="flex flex-col">
              <P className="text-sm lg:text-base xl:text-base font-medium">{testimonial.name}</P>
              <P className="text-xs lg:text-sm xl:text-sm">{testimonial.subtitle}</P>
            </div>
            <Image
              src={`/images/reviewers/${testimonial.avatar}`}
              alt={`${testimonial.name} Avatar`}
              width={48}
              height={48}
              className="object-cover rounded-lg size-8 lg:size-10"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
