import Clock from './clock';
import P from './p';

export default function Header() {
  return (
    <header className="grid lg:grid-cols-2 p-4 items-start border-b pb-6 lg:pb-10 gap-y-4 group/header">
      <div className="grid">
        <P className="leading-tight font-medium tracking-tight">Jaypal Sapara</P>
        <P className="leading-tight tracking-tight text-muted-foreground/50">
          Local Time — <Clock className="w-[4ch] inline-flex tabular-nums text-center tracking-tighter me-0.5" />{' '}
          Gujarat, India.
        </P>
      </div>
      <div>
        <P className="leading-tight text-muted-foreground/50 tracking-tight group-hover/header:text-foreground transition-colors will-change-[color] ease-in">
          Leading projects from concept to launch, translating client requirements into scalable solutions while
          providing ongoing support and maintenance after deployment.
        </P>
      </div>
    </header>
  );
}
