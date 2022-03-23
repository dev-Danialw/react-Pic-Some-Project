import { useState, useEffect, useRef } from "react";

function useHover() {
  const [hovered, sethovered] = useState(false);
  const ref = useRef(null);
  function enter() {
    sethovered(true);
  }
  function leave() {
    sethovered(false);
  }
  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovered, ref];
}

export default useHover;
