import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";


export default function ScrollTextEffect({text,size}) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });
 
  const words = text?.split(" ");

  return (
    <p
      ref={element}
      style={{
        fontSize: `${size}px`,
        color: "white",
        display: "flex",
        flexWrap: "wrap",
        lineHeight: "1.1",
      }}
    >
      {words.map((w, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
        return (
          <span style={{marginRight: "10px", marginTop: "10px",position:"relative"}}>
            <span style={{position:"absolute",opacity:"0.1"}}>{w}</span>
            <motion.span
              style={{  opacity }}
              key={i}
            >
              {w}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
