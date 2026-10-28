import Container from '@/components/container';
import StripeDivider from '@/components/stripe-divider';
import { Button } from '@/components/ui/button';
import OverviewNumbers from '@/data/trust-by-numbers.json';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Container>
        <div className='flex justify-end'>
          <img src="-" alt="dd" className='bg-muted aspect-video w-64' />
        </div>
        <h1 className="text-6xl font-semibold tracking-tight leading-none font-heading text-pretty mt-12">
          I turn product ideas into shipped, <span className="text-primary">revenue-generating web application.</span>
        </h1>
        <p className="mt-8 max-w-[80ch] text-pretty text-[1.063rem] text-foreground/80">
          Design and develop web applications that drive outcomes. Performance, strong security, responsive interfaces,
          and clean, maintainable code are the standard for every project.
        </p>
        <div className="flex gap-2 mt-9">
          <Button size={'lg'}>
            Schedule a call <ArrowUpRight />
          </Button>
          <Button variant={'outline'} size={'lg'}>
            Email me
          </Button>
        </div>
      </Container>
      <StripeDivider />
      <Container className="grid grid-cols-5 divide-x *:p-4 *:flex *:items-center *:flex-col *:justify-center p-0">
        <div className="items-start!">
          <p className="font-mono tracking-tight">Trust by numbers</p>
        </div>
        {OverviewNumbers.map((data) => (
          <div key={`overview-${data.name}`}>
            <p className="text-2xl font-medium">{data.value}</p>
            <p className="font-mono tracking-tight text-muted-foreground text-sm">{data.name}</p>
          </div>
        ))}
      </Container>
      <StripeDivider />
      <Container className='px-0'>
        <div className='px-4 mb-12'>
          <h2 className='font-mono text-primary text-sm'>[ Recent work ]</h2>
          <p className='text-3xl font-medium tracking-tight mt-6'>Projects are giving results</p>
          <p className='text-sm text-muted-foreground mt-2 text-pretty max-w-[60ch]'>Those are truly showcase my skills, creativity, and potential in the best way possible.</p>
        </div>
        <div className='divide-y border-y'>
          {Array.from({ length: 5 }).map((_, i) => <div key={`project-${i}`} className='h-24 flex items-center px-4 hover:bg-muted'>
            <p className='text-xl'>{i + 1}. Project</p>
          </div>)}
        </div>
      </Container>
      <StripeDivider />
      <Container className='px-0'>
        <div className='px-4 mb-12'>
          <h2 className='font-mono text-primary text-sm'>[ Capabilities ]</h2>
          <p className='text-3xl font-medium tracking-tight mt-6'>Services those make the experience</p>
          <p className='text-sm text-muted-foreground mt-2 text-pretty max-w-[60ch]'>Versatile skill set across creative and technical domains. Providing reliable services to bring your ideas to life.</p>
        </div>
        <div className='divide-y border-y'>
          {Array.from({ length: 5 }).map((_, i) => <div key={`project-${i}`} className='h-24 flex items-center px-4 hover:bg-muted'>
            <p className='text-xl'>{i + 1}. Project</p>
          </div>)}
        </div>
      </Container>
    </>
  );
}
