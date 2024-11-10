import React, { useRef } from 'react'
import { motion , useScroll , useTransform ,useMotionTemplate} from 'framer-motion'
export default function Paralaximg({className,alt,src,start,end}) {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:[`${start}px end`,`end ${end * - 1}px`]
    })
    const opacity = useTransform(scrollYProgress,[0.75,1],[1,0])
    const scale = useTransform(scrollYProgress,[0.75,1],[1,0])
    const y = useTransform(scrollYProgress,[0,1],[start,end])
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`


  return (
   <motion.img style={{opacity,transform}} ref={ref} src={src} alt={alt} className={className} />
  )
}
