import  { useEffect, useState } from "react";
import {  useAnimation } from "framer-motion";

export const useAnimate = () => {
    const controls = useAnimation();
    const [hasAnimated, setHasAnimated] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = 200;
  
        if (scrollY > threshold && !hasAnimated) {
          controls.start({ opacity: 1, y: 0 });
          setHasAnimated(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [controls, hasAnimated]);
  

  return { controls };
};
