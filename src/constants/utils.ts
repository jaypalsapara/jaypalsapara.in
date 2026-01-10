export function randomValue(min: number, max: number): number {
  return Math.random() * (max - min + 1) + min;
}

export function lazyImageObserver({
  query = "img[loading='lazy'],[data-lazy-images='container']",
  rootMargin = '500px',
}: { query?: string; rootMargin?: string } = {}): IntersectionObserver {
  const lazyImages = [...document.querySelectorAll<HTMLImageElement | HTMLElement>(query)];

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          /**
           * Load when parent visible
           */
          if (el.target.tagName.toLowerCase() !== 'img') {
            [...el.target.querySelectorAll(`img[loading='lazy']`)].forEach((img) => {
              const url = img.getAttribute('src');
              if (url) new Image().src = url;
              obs.unobserve(img);
            });
            obs.unobserve(el.target);
          } else {
            /**
             * Load when target visible
             */
            const url = el.target.getAttribute('src');
            if (url) new Image().src = url;
            obs.unobserve(el.target);
          }
        }
      });
    },
    {
      rootMargin,
    },
  );
  lazyImages.forEach((img) => observer.observe(img));
  return observer;
}
