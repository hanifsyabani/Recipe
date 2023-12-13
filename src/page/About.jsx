import React, { useEffect } from 'react'
import NavbarPages from '../components/NavbarPages'
import img from '../assets/soup.jpg'
import Footer from './Footer'
import AOS from "aos";
import "aos/dist/aos.css"; 

const About = () => {

  useEffect(() => {
    AOS.init({
      once: true
    });
  })

  return (
    <>
      <NavbarPages/>
      <div className='container px-[8%] py-[2rem]'>
        <h1 className='text-2xl font-bold mb-20'>About</h1>
        <h1 className='text-3xl lg:text-5xl font-semibold font-serif lg:max-w-4xl'  data-aos="fade-down" data-aos-delay="300">We're group of foodies who love cooking and the internet</h1>
        <div className='w-full h-[20rem] my-10' data-aos='fade-down' data-aos-delay="500">
          <img src={img} alt="" className='w-full h-full'/>
        </div>
        <p data-aos='fade-down' data-aos-delay="700">Welcome to our culinary haven, where gastronomic wonders come to life! In our dedicated Recipe Section, we invite you on a journey of flavor exploration, offering a treasure trove of mouthwatering dishes that cater to every palate and skill level. Whether you're a seasoned chef or a kitchen novice, our collection of recipes is designed to inspire, educate, and satiate your culinary curiosity.</p>
      </div>
      <div className='container px-[8%] py-[2rem] lg:flex justify-center items-center mt-20'>
        <div className='lg:w-1/2' data-aos="fade-right">
          <h1 className='text-5xl font-bold max-w-xs'>Simple, Easy Recipe for all</h1>
          <p className='mt-5 max-w-md'>In our commitment to making cooking accessible for everyone, our collection of recipes is crafted with simplicity and ease in mind. Whether you're a seasoned chef or a beginner in the kitchen, our straightforward instructions and minimal ingredients aim to streamline the cooking process, allowing you to create delicious meals without the hassle. </p>
        </div>
        <div className='lg:w-1/2' data-aos="fade-left">
          <img src="https://images.unsplash.com/photo-1568431710123-a7e75af79e8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtvcGl8ZW58MHx8MHx8fDA%3D" alt="" className='mt-7 lg:mt-0'/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About