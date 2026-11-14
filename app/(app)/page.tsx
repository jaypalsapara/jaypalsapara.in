import Container from '@/components/container';
import StripeDivider from '@/components/stripe-divider';
import { Button } from '@/components/ui/button';
import OverviewNumbers from '@/data/trust-by-numbers.json';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
    return (
        <>
            <Container>
                <div className="flex justify-end">
                    <img src="-" alt="dd" className="aspect-video w-64 bg-muted" />
                </div>
                <h1 className="mt-12 font-heading text-6xl leading-none font-semibold tracking-tight text-pretty">
                    I turn product ideas into shipped,{' '}
                    <span className="text-primary">revenue-generating web application.</span>
                </h1>
                <p className="mt-8 max-w-[80ch] text-[1.063rem] text-pretty text-foreground/80">
                    Design and develop web applications that drive outcomes. Performance, strong security, responsive
                    interfaces, and clean, maintainable code are the standard for every project.
                </p>
                <div className="mt-9 flex gap-2">
                    <Button size={'lg'}>
                        Schedule a call <ArrowUpRight />
                    </Button>
                    <Button variant={'outline'} size={'lg'}>
                        Email me
                    </Button>
                </div>
            </Container>
            <StripeDivider />
            <Container className="grid grid-cols-5 divide-x p-0 *:flex *:flex-col *:items-center *:justify-center *:p-4">
                <div className="items-start!">
                    <p className="font-mono tracking-tight">Trust by numbers</p>
                </div>
                {OverviewNumbers.map((data) => (
                    <div key={`overview-${data.name}`}>
                        <p className="text-2xl font-medium">{data.value}</p>
                        <p className="font-mono text-sm tracking-tight text-muted-foreground">{data.name}</p>
                    </div>
                ))}
            </Container>
            <StripeDivider />
            <Container className="px-0">
                <div className="mb-12 px-4">
                    <h2 className="font-mono text-sm text-primary">[ Recent work ]</h2>
                    <p className="mt-6 text-3xl font-medium tracking-tight">Projects are giving results</p>
                    <p className="mt-2 max-w-[60ch] text-sm text-pretty text-muted-foreground">
                        Those are truly showcase my skills, creativity, and potential in the best way possible.
                    </p>
                </div>
                <div className="divide-y border-y">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={`project-${i}`} className="flex h-24 items-center px-4 hover:bg-muted">
                            <p className="text-xl">{i + 1}. Project</p>
                        </div>
                    ))}
                </div>
            </Container>
            <StripeDivider />
            <Container className="px-0">
                <div className="mb-12 px-4">
                    <h2 className="font-mono text-sm text-primary">[ Capabilities ]</h2>
                    <p className="mt-6 text-3xl font-medium tracking-tight">Services those make the experience</p>
                    <p className="mt-2 max-w-[60ch] text-sm text-pretty text-muted-foreground">
                        Versatile skill set across creative and technical domains. Providing reliable services to bring
                        your ideas to life.
                    </p>
                </div>
                <div className="divide-y border-y">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={`project-${i}`} className="flex h-24 items-center px-4 hover:bg-muted">
                            <p className="text-xl">{i + 1}. Project</p>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
}
