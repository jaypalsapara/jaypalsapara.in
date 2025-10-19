type SectionHeaderProps = {
  title: string;
  description: string;
};
const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="pad-x mt-6 grid grid-cols-4 lg:mt-12 lg:grid-cols-12">
      <h3 className="col-span-full text-pretty">{title}</h3>
      <p className="col-span-4 mt-5 text-muted-foreground lg:col-span-5">{description}</p>
    </div>
  );
};

export default SectionHeader;
