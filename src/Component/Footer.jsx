import React,{useEffect, useRef, useState} from 'react'
import {motion,useInView} from 'framer-motion'

const Footer = () => {
    const [show, setshow] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref)
    const slide={
      hidden:{
        opacity:0
      },
      show:{
        opacity:1,
        transition:{
          type:'tween',
          duration:0.1,
          delay:0.2,
          stiffness:400,
          when:'beforeChildren',
          staggerChildren:0.3
        }
      }
     
    }
    useEffect(()=>{
  if(isInView){
    setshow(true)
  }
    },[isInView])
    
    const children={
      hidden:{
       opacity:0,
       y:-40,
      },
      show:{
        opacity:1,
        y:0
      }}
  return (
    <footer className=' flex py-20 pb-20 sm:pb-72 justify-center min-h-[300px]  bg-center bg-cover' style={{backgroundImage:"url('/b4.gif')"}} ref={ref}>
        {show &&<motion.div variants={slide} initial='hidden' animate='show' className=' text-center w-[95%] sm:w-[70%] 2xl:w-[50%] flex flex-col items-center'>
            <motion.h1 variants={children} className=' text-5xl 2xl:text-6xl font-bold mb-10'>Other ways to get in touch</motion.h1>
            <motion.ul variants={children} className=' flex  text-2xl font-bold'>
                <li className=' mr-2 cursor-pointer'>Email |</li>
                <li className=' mr-2 cursor-pointer'>Support |</li>
                <li className='cursor-pointer'>LinkedIn</li>
            </motion.ul>
        </motion.div>}
    </footer>
  )
}

export default Footer