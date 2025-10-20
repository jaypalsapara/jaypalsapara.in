import FallingText from '@/components/falling-text';

const text =
  `E-commerce Portfolio Forums Personal CMS Booking Entertainment Business API Landing-page Custom Subscription SaaS Kid-friendly Blog LMS Event Educational Informational`
    .split(' ')
    .sort(() => Math.random() - 0.5)
    .join(' ');

const highlightWords = ['E-commerce', 'SaaS', 'CMS', 'Business', 'Custom', 'Portfolio', 'LMS', 'Educational', 'API'];

const ReadyToBuild = () => {
  return (
    <div className="grid">
      <div className="pointer-events-none h-[70vh] [grid-area:1/1] lg:pointer-events-auto">
        <FallingText
          text={text}
          highlightWords={highlightWords}
          highlightClasses="text-accent"
          trigger="scroll"
          backgroundColor="transparent"
          wireframes={false}
          showBounds={false}
          showPositions={false}
          gravity={0.56}
          fontSize="1.25rem"
          mouseConstraintStiffness={0.2}
        />
      </div>
      <div className="relative grid place-content-center [grid-area:1/1]">
        <small className="absolute right-0 m-2 hidden text-muted-foreground italic lg:block">Scroll doesn’t work inside the rectangle</small>
        <div className="text-center">
          <h2 className="font-medium">Ready to build?</h2>
          <p className="text-muted-foreground">Create the incredible with Jaypal</p>
        </div>
      </div>
    </div>
  );
};

export default ReadyToBuild;
