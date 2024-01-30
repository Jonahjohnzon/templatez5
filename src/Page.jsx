import React from 'react'
import Top from './Component/Top'
import Profile from './Component/Profile'
import Book from './Component/Book'
import Calender from './Component/Calender'
import Footer from './Component/Footer'

const Page = () => {
  return (
    <div className=' font-kanit'>
        <Top/>
        <Profile/>
        <Book/>
        <Calender/>
        <Footer/>
    </div>
  )
}

export default Page