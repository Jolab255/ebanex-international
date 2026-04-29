
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // Immediate scroll
    window.scrollTo(0, 0);
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }

    // Smallest possible delay to ensure it happens after the browser has 
    // processed the new DOM nodes and layout
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
