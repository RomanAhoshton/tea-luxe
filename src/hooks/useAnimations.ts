import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useAnimations = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return { controls, ref };
};
