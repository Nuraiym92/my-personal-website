import React from 'react'
import WorkImg from '../assets/erkinish.png'
import FurnitureShop from '../assets/fur.png'
import netflix from '../assets/netflix.png'
import tipCalculator from '../assets/tipcalculator.png'
import githubSearch from '../assets/github.png'
import orion from "../assets/orion.png"
const Work = () => {
  return (
    <div name='work' className='w-full my-40 md:h-screen text-gray-300 bg-[#0a192f]'>
       <div  className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
            <p className='py-6'>Check out some of my recent work</p>
        </div>
     <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{backgroundImage:`url(${WorkImg})`}} className='shadow-lg shadow-[#6aa6b8] group container rounded-md flex justify-center items-center mx-auto content-div'>
             {/*Hover Effects*/}
             <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                   Freelance website
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://erkinish.kg/ "  target="_blank">
                        <button className='text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg's>Code</button>
                    </a>
                </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${FurnitureShop})`}} className='shadow-lg shadow-[#6aa6b8] group container rounded-md flex justify-center items-center mx-auto content-div'>
             {/*Hover Effects*/}
             <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                   Furniture Shop
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://nuraiym92.github.io/comfy-shopping-cart/"  target="_blank">
                        <button className='text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="https://github.com/Nuraiym92/comfy-shopping-cart"  target="_blank">
                        <button className='text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg's>Code</button>
                    </a>
                </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${netflix})`}} className='shadow-lg shadow-[#6aa6b8] group container rounded-md flex justify-center items-center mx-auto content-div'>
             {/*Hover Effects*/}
             <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                   Netflix Clone
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://nuraiym92.github.io/netflix-clone/"  target="_blank">
                        <button className='text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="https://github.com/Nuraiym92/netflix-clone"  target="_blank">
                        <button className='text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg's>Code</button>
                    </a>
                </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${tipCalculator})`}} className='shadow-lg shadow-[#6aa6b8] group container rounded-md flex justify-center items-center mx-auto content-div'>
             {/*Hover Effects*/}
             <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                   Tip Calculator
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://nuraiym92.github.io/tip-calculator/"  target="_blank">
                        <button className='text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="https://github.com/Nuraiym92/tip-calculator"  target="_blank">
                        <button className='text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg's>Code</button>
                    </a>
                </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${githubSearch})`}} className='shadow-lg shadow-[#6aa6b8] group container rounded-md flex justify-center items-center mx-auto content-div'>
             {/*Hover Effects*/}
             <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                   Github Api Project
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://nuraiym92.github.io/github-API-project/"  target="_blank">
                        <button className='text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="https://github.com/Nuraiym92/github-API-project"  target="_blank">
                        <button className='text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg's>Code</button>
                    </a>
                </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${orion})`}} className='shadow-lg shadow-[#6aa6b8] group container rounded-md flex justify-center items-center mx-auto content-div'>
             {/*Hover Effects*/}
             <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
               Orion Corporate Website
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://orion-co.netlify.app/">
                        <button className='text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="https://github.com/New-Republic/orion">
                        <button className='text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg's>Code</button>
                    </a>
                </div>
            </div>
          </div>
       </div>
    </div>
 </div>
  )
}

export default Work