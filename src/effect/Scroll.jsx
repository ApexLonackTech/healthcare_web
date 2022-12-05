import React, { useState, useRef, useLayoutEffect } from 'react';

export default function useScrollBarPosition() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);      
      };
      handleScroll();

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  },[]);

  return [scrollY];
  // const [top, setTop] = useState(0);
  // const ref = useRef();

  // useLayoutEffect(() => {
  //   function getTopPosition() {
  //     const topPosition = ref.current.scrollTop;
  //     setTop(topPosition);
  //   }
  //   ref.current.addEventListener('scroll', getTopPosition);
  //   getTopPosition();
  //   return () => ref.current.removeEventListener('scroll', getTopPosition);
  // }, []);

  // return [ref, top];
}