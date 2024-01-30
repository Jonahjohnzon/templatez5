import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const Top = () => {
  return (
    <div style={{backgroundImage:"url('/bg.gif')"}}>

        <div className=' flex flex-col sm:flex-row justify-between py-40 2xl:py-60'>
          <section className=' w-full flex justify-end'>
            <div className=' w-[95%] sm:w-[80%] 2xl:w-[60%]'>
            <div className=' mb-10'><img src='/logo.avif' className=' w-24 xl:w-48'/></div>
            <h1 className=' font-bold text-6xl sm:text-7xl mb-10'>Meet with our team</h1>
            <p className=' text-2xl sm:text-3xl mb-14 font-light'>We look forward to learning more about your goals and how the team can support you and your team.</p>
            <FaChevronDown className=' text-3xl xl:text-5xl animate-bounce' />
            </div>
          </section>
          <section className=' w-full flex justify-center items-start 2xl:justify-start'>
            <img src='/top1.avif' className=' sm:w-[80%] 2xl:w-[60%]'/>
          </section>
        </div>
    </div>
  )
}

export default Top