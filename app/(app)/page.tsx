import StripeDivider from '@/components/stripe-divider';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="border-x mx-auto max-w-screen md:max-w-5xl p-4 w-full py-12 screen-line-bottom pt-24">
        <h1 className="text-6xl font-semibold tracking-tight leading-none font-heading text-pretty">
          I turn product ideas into shipped, <span className="text-primary">revenue-generating web application.</span>
        </h1>
        <p className="mt-8 max-w-[80ch] text-pretty">
          Design and develop web applications that drive outcomes. Performance, strong security, responsive interfaces,
          and clean, maintainable code are the standard for every project.
        </p>
        <div className="flex gap-4 mt-9">
          <Button size={'lg'}>
            Schedule a call <ArrowUpRight />
          </Button>
          <Button variant={'outline'} size={'lg'}>
            Explore more <ArrowDown />
          </Button>
        </div>
      </div>
      <StripeDivider className="h-12" />
      <div className="border-x mx-auto max-w-screen md:max-w-5xl w-full screen-line-bottom grid grid-cols-5 divide-x *:p-4 *:flex *:items-center *:flex-col *:justify-center">
        <div>
          <p className="font-mono tracking-tight">Trust by numbers</p>
        </div>
        <div>
          <p className="text-2xl font-medium">6+</p>
          <p className="font-mono tracking-tight text-muted-foreground text-sm">Projects delivered</p>
        </div>
        <div>
          <p className="text-2xl font-medium">100%</p>
          <p className="font-mono tracking-tight text-muted-foreground text-sm">Completed rate</p>
        </div>
        <div>
          <p className="text-2xl font-medium">4.9</p>
          <p className="font-mono tracking-tight text-muted-foreground text-sm">Stars rated work</p>
        </div>
        <div>
          <p className="text-2xl font-medium">3+</p>
          <p className="font-mono tracking-tight text-muted-foreground text-sm">Years of experience</p>
        </div>
      </div>
    </>
  );
}
