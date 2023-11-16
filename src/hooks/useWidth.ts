import { useEffect, useState } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const getSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", getSize);
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, []);

  return {width}
};
