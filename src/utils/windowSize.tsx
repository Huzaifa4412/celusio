"use client";
import { useState, useEffect } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window && window.innerWidth,
    height: window && window.innerHeight,
  });

  useEffect(() => {
    // Update size on resize
    function handleResize() {
      setWindowSize({
        width: window && window.innerWidth,
        height: window && window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
