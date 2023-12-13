import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from 'react';


const Inbox = () => {

  useEffect(() => {
    AOS.init({
      once: true
    });
  })


  return (
    <div className='container px-[7%] py-[4rem] text-center bg-orange-200'>
      <h1 className='font-[kalam] text-5xl font-bold max-w-xs mx-auto' data-aos="zoom-in">Deliciousness to your inbox</h1>
      <p className='mt-3 mx-auto max-w-sm' data-aos="zoom-in">Enjoy weekly hand picked recipes and recommendations</p>
      <div className='mt-6 flex justify-center items-center' data-aos="zoom-in">
        <input type="text" placeholder='Enter your email' className='p-2 w-[20rem]'/>
        <div className='p-2 bg-orange-400 text-white font-semibold w-[6rem]'>
          <button>Join</button>
        </div>
      </div>
      <span className='text-xs' data-aos="zoom-in" data-aos-delay="300">By joining our newsletter you agree to receive special offers and updates</span>
    </div>
  )
}

export default Inbox