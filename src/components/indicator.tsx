const Indicator = () => {
  return (
    <div className="fixed top-0 z-9999999999999 m-3 flex items-center justify-center overflow-hidden rounded-md border border-neutral-600 bg-black px-1.5 text-sm text-white opacity-30 select-none *:hidden hover:opacity-100">
      <div className="max-sm:block">vs</div>
      <div className="sm:max-md:block">sm</div>
      <div className="md:max-lg:block">md</div>
      <div className="lg:max-xl:block">lg</div>
      <div className="xl:max-2xl:block">xl</div>
      <div className="2xl:block">2xl</div>
    </div>
  );
};

export default Indicator;
