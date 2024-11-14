import React from "react";
import "./style.css";
import { motion } from "framer-motion";

export default function Button({name,onclick}) {
  return (
    <div style={{marginTop:"-20px",marginBottom:"60px"}}>
      <motion.button
        onClick={onclick}
        className="px-20  py-2 rounded-md relative btn"
        initial={{ "--x": "100%", scale: 1 }}
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.8 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
      >
        <span  className="text-neutral-100 tracking-wide font-light h-full w-full block relative Btn-mask">
          {name}
        </span>
        <span className="block absolute inset-0 rounded-md p-px Btn-broder" />
      </motion.button>
    </div>
  );
}
