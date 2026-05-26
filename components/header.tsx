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
          Leading end-to-end project development aligned with the clients vision, including requirements consultation,
          solution design, development, and deployment, and delivering scalable solutions with timely and seamless
          execution.
        </P>
      </div>
    </header>
  );
}
