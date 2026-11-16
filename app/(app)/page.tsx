import Container from '@/components/container';
import {
    Frame,
    FrameAction,
    FrameContent,
    FrameDescription,
    FrameFooter,
    FrameHeader,
    FrameIcon,
    FrameTitle,
} from '@/components/frame';
import { Button, buttonVariants } from '@/components/ui/button';
import { EMAIL_ADDRESS } from '@/constants/basic';
import { cn } from 'cn';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Home() {
    return (
        <>
            <Container>
                <p className="font-mono text-sm text-foreground-light">[ Hi, I'm Jaypal Sapara ]</p>
                <h1 className="mt-8 font-heading text-6xl leading-none font-semibold tracking-tight text-balance">
                    I turn product ideas into shipped,
                    <br />
                    <span className="text-foreground-lighter">revenue-generating web application.</span>
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
                            className="stroke-[2.5] transition-transform will-change-transform group-hover/button:translate-x-px group-hover/button:-translate-y-px"
                        />
                    </Button>
                    <a
                        href={'mailto:' + EMAIL_ADDRESS}
                        className={cn(
                            buttonVariants({
                                variant: 'outline',
                                size: 'lg',
                            }),
                        )}
                    >
                        Email me
                    </a>
                </div>
            </Container>
            <div className="aspect-video bg-white p-12">
                <Frame size="sm">
                    <FrameHeader>dd</FrameHeader>
                    <FrameContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi facilis sed
                        sapiente ducimus perspiciatis, deleniti expedita odio iusto libero eligendi maiores rem ea quia
                        quam rerum dolorem molestiae quas.
                    </FrameContent>
                    <FrameFooter>Footer</FrameFooter>
                </Frame>
            </div>
        </>
    );
}
