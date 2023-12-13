// import React, { useEffect } from "react";

import NavbarPages from "../NavbarPages";
import pizzajpg from '../../assets/pizza-min.jpg';
import ListRecipe from "./ListRecipe";
import Footer from '../../page/Footer'

const Pizza = () => {
  return (
    <div>
      <NavbarPages />
      <div className="w-full h-[20rem] mt-10">
        <img src={pizzajpg} alt="" className="w-full h-full object-cover"/>
      </div>
      <ListRecipe/>
      <Footer/>
    </div>
  );
};

export default Pizza;
