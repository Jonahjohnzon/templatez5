import React,{useEffect, useRef, useState} from 'react'
import {motion,useInView} from 'framer-motion'


const Profile = () => {
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
    <div className=' bg-purple flex min-h-[300px] justify-center py-20 xl:py-40' ref={ref}>
        {show &&<motion.div className=' w-[95%] sm:w-[90%] xl:w-[70%] 2xl:w-[55%] ' variants={slide} initial='hidden' animate='show'>
            <section className=' flex flex-col sm:flex-row h-fit mb-10'>
                <motion.div variants={children}  className=' xl:w-40 xl:h-40 sm:h-28 w-40 h-40 sm:w-28 mr-10 overflow-hidden rounded-full flex justify-center items-center bg-center bg-cover' style={{backgroundImage:"url('/second.jpeg')"}}></motion.div>
                <motion.div variants={children}  className=' h-full flex flex-col justify-between'>
                    <h1 className=' text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-5 '>Hey there! 👋🏼</h1>
                    <h2 className=' text-4xl font-light'>I'm (NAME)</h2>
                </motion.div>
            </section>
            <motion.section variants={children}  className=' text-xl sm:text-2xl font-light'>
                <p className=' mb-5'>As a dedicated sales representative at (COMPANY_NAME), my primary goal is to help businesses like yours navigate the complexities of today's digital landscape and find solutions that truly make a difference. </p>
                <p>With a background in technology and a passion for problem-solving, I'm committed to understanding your unique challenges and identifying how our software can be tailored to meet your specific needs</p>
            </motion.section>
        </motion.div>}
    </div>
  )
}

export default Profile