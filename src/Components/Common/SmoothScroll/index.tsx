/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useRef } from "react";

import "./styles.scss";
import useWindowSize from "../../../hooks/useWindowSize";

interface props{
    children: any;
}

const SmoothScroll:FC<props> = ({ children }) => {
  // 1.
  const windowSize = useWindowSize();
  //2.
  const scrollingContainerRef = useRef<any>();

  // 3.
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // 4.
  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollingContainerRef.current?.offsetHeight
      // scrollingContainerRef.current?.getBoundingClientRect().height
    }px`;
  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
    setTimeout(()=>{window.dispatchEvent(new Event('resize')); }, 1000)
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div className="parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
