import React, { useEffect } from 'react'
import CardLatest from '../components/CardLatest'
import AOS from "aos";
import "aos/dist/aos.css"; 


const LatestRecipes = ({dataRecipe}) => {

  useEffect(() => {
    AOS.init({
      once: true
    });
  })

  return (
    <div className='container px-[7%] py-[2rem] mt-6'>
      <h1 className='font-[kalam] text-2xl font-bold' data-aos='fade-up' >Latest Recipes</h1>
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-3 mt-10'>
        <CardLatest dataRecipe={dataRecipe}/>
      </div>
    </div>
  )
}

export default LatestRecipes