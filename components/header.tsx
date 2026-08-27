import Clock from './clock';
import P from './p';

export default function Header() {
  return (
    <header className="grid lg:grid-cols-2 p-4 items-start border-b pb-6 lg:pb-10 gap-y-4 group/header">
      <div className="grid">
        <P className="leading-tight font-medium">Jaypal Sapara</P>
        <P className="leading-tight text-xl text-muted-foreground/50">
          Local Time — <Clock className="w-[4ch] inline-flex tabular-nums text-center tracking-tighter me-0.5" />{' '}
          Gujarat, India.
        </P>
      </div>
      <div>
        <P className="leading-tight text-muted-foreground/50 group-hover/header:text-foreground transition-colors will-change-[color] ease-in">
          Design and develop web applications that drive outcomes. Fast performance, strong security, responsive
          interfaces, and clean, maintainable code are the standard for every project.
        </P>
      </div>
    </header>
  );
}
