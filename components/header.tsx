import P from './p';

export default function Header() {
  return (
    <header className="grid lg:grid-cols-2 p-4 items-start border-b pb-6 lg:pb-10 gap-y-4">
      <div className="grid">
        <P className="leading-tight font-medium tracking-tight">Jaypal Sapara</P>
        <P className="leading-tight tracking-tight text-muted-foreground/50">Local Time—10:24 Gujarat, India.</P>
      </div>
      <div>
        <P className="leading-tight text-muted-foreground/50 tracking-tight">
          Leading end-to-end project development aligned with the clients vision, including requirements consultation,
          solution design, development, and deployment, and delivering scalable solutions with timely and seamless
          execution.
        </P>
      </div>
    </header>
  );
}
