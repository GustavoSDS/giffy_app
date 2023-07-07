import { useEffect, useRef, useState } from 'react';

export default function useNearScreen({ distance = '200px', externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false)
  const elementRef = useRef();
    
  useEffect(() => {
    let observer;

    const element = externalRef ? externalRef.current : elementRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    }
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver(onChange, {
        rootMargin: distance,
      });
      if (element) observer.observe(element)
    });

    return () => observer && observer.disconnect()
  }, [externalRef, distance, once]);

  return { isNearScreen, elementRef };
}