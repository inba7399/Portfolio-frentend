import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function HeroCover({ HEIGHT }) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [1500, 2000], [1, 0]);
  const backgroundSize = useTransform(scrollY, [1500, 2000], ["170%", "100%"]);
  const c1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const c2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${c1}% ${c1}%, ${c2}% ${c1}%, ${c2}% ${c2}%, ${c1}% ${c2}%)`;

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        opacity,
        backgroundSize,
        clipPath,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></motion.div>
  );
}
