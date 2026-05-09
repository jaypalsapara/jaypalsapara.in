import P from './p';

export default function Header() {
  return (
    <header className="grid grid-cols-2 p-4 items-start border-b pb-10">
      <div className="grid font-medium">
        <P className="leading-tight">Jaypal Sapara</P>
        <P className="leading-tight text-muted-foreground/50">Local Time—10:24 Gujarat, India.</P>
      </div>
      <div className="font-medium">
        <P className="leading-tight text-muted-foreground/50">
          Leading end-to-end project development aligned with the clients vision, including requirements consultation,
          solution design, development, and deployment, and delivering scalable solutions with timely and seamless
          execution.
        </P>
      </div>
    </header>
  );
}
