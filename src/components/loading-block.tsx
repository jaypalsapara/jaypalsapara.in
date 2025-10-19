import Loader from './loader';

const LoadingBlock = () => {
  return (
    <div className="col-span-12 grid h-full w-full place-content-center">
      <Loader />
    </div>
  );
};

export default LoadingBlock;
