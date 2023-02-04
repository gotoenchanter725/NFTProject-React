import { useState, useEffect } from "react";

export default function useWindowSize() {
  const getSize = () => {
    console.log('init', window.document.body.offsetHeight)
    return {
      width: window.document.body.offsetWidth,
      // height: window.innerHeight,
      height: window.document.body.offsetHeight
    };
  };

  const [windowSize, setWindowSize] = useState<any>(getSize());

  useEffect(() => {
    setWindowSize(getSize())
    const handleResize = (e:any) => {
      console.log(e)
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
