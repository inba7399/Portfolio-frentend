import React from 'react'
import Paralaximg from './Paralaximg'
import img1 from "../assets/react.png"
import img2 from "../assets/express.png"

export default function TechImages() {
  return (
    <div className='relative z-10 mx-auto px-4 pt-[200px]' >
        <Paralaximg  src={img1} alt='react logo' className='w-1/3' start={-200} end={200} />
        <Paralaximg  src={img2} alt='mongo logo' className='w-2/3' start={-250} end={250} />
        <Paralaximg  src={img2} alt='mongo logo' className='w-1/3' start={-200} end={200} />
        <Paralaximg  src={img2} alt='mongo logo' className='w-5/12' start={-500} end={200} />
    </div>
  )
}
