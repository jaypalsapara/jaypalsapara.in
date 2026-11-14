import Container from '@/components/container';
import StripeDivider from '@/components/stripe-divider';
import { Button } from '@/components/ui/button';
import OverviewNumbers from '@/data/trust-by-numbers.json';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
    return (
        <>
            <Container>
                <h1 className="font-heading text-6xl leading-none font-semibold tracking-tight text-pretty">
                    I turn product ideas into shipped,
                    <br />
                    <span className='text-primary'>revenue-generating web application.</span>
                </h1>
                <p className="mt-8 max-w-[80ch] text-[1.063rem] text-pretty text-foreground-light">
                    Design and develop web applications that drive outcomes. Performance, strong security, responsive
                    interfaces, and clean, maintainable code are the standard for every project.
                </p>
                <div className="mt-9 flex gap-2">
                    <Button size={'lg'}>
                        Schedule a call <ArrowUpRight data-icon="inline-end" />
                    </Button>
                    <Button variant={'outline'} size={'lg'}>
                        Email me
                    </Button>
                </div>
            </Container>
        </>
    );
}
