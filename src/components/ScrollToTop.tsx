import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top without animation for page changes
    // This prevents the "smooth scroll" from taking too long if the page is long
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
