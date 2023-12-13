import React, { useEffect } from "react";
import pizza from "../assets/pizza-min.jpg";
import dessert from "../assets/desserts-min.jpg";
import pasta from "../assets/pasta-min.jpg";
import smootis from "../assets/smootis-min.jpg";
import vegan from "../assets/vegan-min.jpg";
import breakfast from "../assets/breakfast-min.jpg";

import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; 

const Categories = () => {

  useEffect(() => {
    AOS.init({
      once: true
    });
  })

  return (
    <div className="container p-3 mt-10 lg:mt-0 lg:px-[7%] lg:py-[2rem]">
      <h1 className="font-[kalam] text-2xl font-bold ">Popular Categories</h1>
      <div className="mt-10 flex justify-center items-center gap-10 flex-wrap">
        <Link to="/pizza/pizza">
          <div className="hover:scale-110 duration-150 cursor-pointer" data-aos='fade-up'>
            <img src={pizza} alt="" className=" w-20 h-20 lg:w-24 lg:h-24 rounded-full" />
            <h5 className="text-center font-semibold mt-2">Pizza</h5>
          </div>
        </Link>

        <Link to="/pasta/pasta">
          <div className="hover:scale-110 duration-150 cursor-pointer" data-aos='fade-up' data-aos-delay="30">
            <img src={pasta} alt="" className="w-20 h-20 lg:w-24 lg:h-24 rounded-full" />
            <h5 className="text-center font-semibold mt-2">Pasta</h5>
          </div>
        </Link>

        <Link to='/breakfast/breakfast'>
          <div className="hover:scale-110 duration-150 cursor-pointer" data-aos='fade-up' data-aos-delay="50">
            <img src={breakfast} alt="" className="w-20 h-20 lg:w-24 lg:h-24 rounded-full" />
            <h5 className="text-center font-semibold mt-2">Breakfast</h5>
          </div>
        </Link>

        <Link to='/smooties/smooties'>
          <div className="hover:scale-110 duration-150 cursor-pointer" data-aos='fade-up' data-aos-delay="70">
            <img src={smootis} alt="" className="w-20 h-20 lg:w-24 lg:h-24 rounded-full" />
            <h5 className="text-center font-semibold mt-2">Smooties</h5>
          </div>
        </Link>

        <Link  to='/vegan/vegan'>
          <div className="hover:scale-110 duration-150 cursor-pointer" data-aos='fade-up' data-aos-delay="90">
            <img src={vegan} alt="" className="w-20 h-20 lg:w-24 lg:h-24 rounded-full" />
            <h5 className="text-center font-semibold mt-2">Vegan</h5>
          </div>
        </Link>

        <Link  to='/dessert/dessert'>
          <div className="hover:scale-110 duration-150 cursor-pointer" data-aos='fade-up' data-aos-delay="110">
            <img src={dessert} alt="" className="w-20 h-20 lg:w-24 lg:h-24 rounded-full" />
            <h5 className="text-center font-semibold mt-2">Dessert</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
