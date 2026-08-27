import { ClientCldImage } from '@/components/client-cld-image';
import { getTestimonials } from '@/dal/testimonial-dal';
import { cn } from '@/lib/utils';
import { TestimonialProps } from '@/types/table';
import H4 from '../h4';
import P from '../p';
import RatingStars from '../rating-stars';

export default function Testimonial() {
  return (
    <div className="px-4 py-6 grid lg:grid-cols-2">
      <div>
        <H4 className="sticky top-14">Testimonials</H4>
      </div>
      <div className="@container mt-8 lg:mt-0">
        <Testimonials />
      </div>
    </div>
  );
}

const Testimonials = async () => {
  const testimonials: TestimonialProps[] = await getTestimonials();
  return (
    <div className="grid @2xl:grid-cols-2 gap-4" data-nosnippet>
      {testimonials.map((testimonial) => (
        <div
          key={`testimonial-${testimonial.id}`}
          className={cn('flex flex-col bg-muted p-5 lg:p-6 rounded-lg lg:rounded-xl', {
            'row-span-2 bg-foreground text-white': testimonial.is_highlighted,
          })}
        >
          <div className="flex">
            <RatingStars rating={testimonial.rating} />
          </div>
          <P className="mt-4 text-base lg:text-base xl:text-lg">
            <q>{testimonial.description}</q>
          </P>
          <div className="flex justify-between mt-auto pt-4">
            <div className="flex flex-col">
              <P className="text-sm lg:text-base xl:text-base font-medium">{testimonial.name}</P>
              <P className="text-xs lg:text-sm xl:text-sm text-muted-foreground">{testimonial.subtitle}</P>
            </div>
            <ClientCldImage
              src={`/images/reviewers/${testimonial.avatar}`}
              alt={`${testimonial.name} Avatar`}
              width={48}
              height={48}
              loading="lazy"
              className="object-cover rounded-sm lg:rounded-md size-9 lg:size-10"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
