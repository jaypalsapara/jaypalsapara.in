import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
    return (
        <>
            <Container>
                <p className="font-mono text-sm text-foreground-light">[ Hi, I'm Jaypal Sapara ]</p>
                <h1 className="mt-8 font-heading text-6xl leading-none font-semibold tracking-tight text-pretty">
                    I turn product ideas into shipped,
                    <br />
                    revenue-generating web application.
                </h1>
                <p className="mt-8 max-w-[80ch] text-[1.063rem] text-pretty text-foreground-light">
                    Design and develop web applications that drive outcomes. Performance, strong security, responsive
                    interfaces, and clean, maintainable code are the standard for every project.
                </p>
                <div className="mt-9 flex gap-2">
                    <Button size={'lg'} className={'group/button'}>
                        Schedule a call
                        <ArrowUpRight
                            data-icon="inline-end"
                            className="transition-transform will-change-transform group-hover/button:translate-x-px group-hover/button:-translate-y-px"
                        />
                    </Button>
                    <Button variant={'outline'} size={'lg'}>
                        Email me
                    </Button>
                </div>
            </Container>
        </>
    );
}
