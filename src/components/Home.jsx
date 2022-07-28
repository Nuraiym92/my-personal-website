import React from 'react'
import {Link} from "react-scroll"
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi,my name is </p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nuraiym</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
      <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a Front-End Developer with strong problem-solving and communication skills. Specialized in designing and developing responsive web-based applications using Javascript, React technologies in Agile and Git environments.</p>
      <div>
        <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ccd6f6]  hover:text-[#0a192f]'>
        <Link  to="work" spy={true} smooth={true}  duration={500} >
            View work
          </Link>
          <span className='hover:rotate-90 duration-300'>
               <HiArrowNarrowRight className='ml-4'/> 
          </span> 
       </button>
      </div>
    </div>
  </div>
  )
}

export default Home