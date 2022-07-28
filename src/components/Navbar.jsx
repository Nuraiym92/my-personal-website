import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from "react-scroll"
import resume from "../assets/resume.pdf"
const Navbar = () => {
  const [nav,setNav]= useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div  className="rounded-sm" >
       <h4 className='text-3xl text-pink-600 italic font-medium font-serif'>NZ</h4>
      </div>

      {/*menu */}
      <ul className='hidden md:flex'>
          <li>
          <Link  to="home" spy={true} smooth={true}  duration={500} >
            Home
          </Link>
          </li>
          <li>
          <Link  to="about" spy={true} smooth={true}  duration={500} >
            About
          </Link>
          </li>
          <li>
          <Link  to="skills" spy={true} smooth={true}  duration={500} >
            Skills
          </Link>
          </li>
          <li>
          <Link  to="work" spy={true} smooth={true}  duration={500} >
            Work
          </Link>
          </li>
          <li>
          <Link  to="contact" spy={true} smooth={true}  duration={500} >
            Contact
          </Link>
          </li>
        </ul>
     
     {/*Hamburger */}
       <div onClick={handleClick} className='md:hidden z-10'>
         {!nav ? <FaBars/>: <FaTimes/>}
       </div>
     {/*Mobile menu */}
         <ul className={!nav ? "hidden" : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
           <li className='py-6 text-4xl'>
           <Link onClick={handleClick} to="home" spy={true} smooth={true}  duration={500} >
            Home
          </Link>
           </li>
           <li className='py-6 text-4xl'>
           <Link onClick={handleClick} to="about" spy={true} smooth={true}  duration={500} >
            About
          </Link>
           </li>
           <li className='py-6 text-4xl'>
           <Link onClick={handleClick} to="skills" spy={true} smooth={true}  duration={500} >
            Skills
          </Link>
           </li>
           <li className='py-6 text-4xl'>
           <Link onClick={handleClick} to="work" spy={true} smooth={true}  duration={500} >
            Work
          </Link>
           </li>
           <li className='py-6 text-4xl'>
           <Link onClick={handleClick} to="contact" spy={true} smooth={true}  duration={500} >
            Contact
          </Link>
           </li>
         </ul>
               {/*Social icons */}
               <div className='hidden lg:flex flex fixed flex-col top-[35%] left-0'>
                  <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 border-solid border border-white-600  '>
                      <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/nuraiym-zhyrgalbekova-854749213/"  target="_blank">
                        Linkedin <FaLinkedin size={30}/>
                      </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 border-solid border border-white-600 '>
                      <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/Nuraiym92" target="_blank">
                        Github <FaGithub size={30}/>
                      </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 border-solid border border-white-600'>
                      
                      <Link  className="flex justify-between items-center w-full text-gray-300" onClick={handleClick} to="contact" spy={true} smooth={true}  duration={500} >
                      Email <HiOutlineMail size={30}/>
                    </Link>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 border-solid border border-white-600'>
                      <a className="flex justify-between items-center w-full text-gray-300" href={resume} download="resume.pdf" target="_blank">
                        Resume <BsFillPersonLinesFill size={30}/>
                      </a>
                    </li>
                  </ul>
               </div>
    </div>
  )
}

export default Navbar