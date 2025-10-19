const useScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant', // or 'smooth' if you want animation
  });
  return;
};

export default useScrollTop;
