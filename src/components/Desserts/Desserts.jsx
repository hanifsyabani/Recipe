// import React, { useEffect } from "react";

import NavbarPages from "../NavbarPages";
import djpg from "../../assets/desserts-min.jpg";
import CardDesserts from './CardDesserts'
import Footer from '../../page/Footer'

const Desserts = () => {
  return (
    <div>
      <NavbarPages />
      <div className="w-full h-[20rem] mt-10">
        <img src={djpg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container px-[7%] py-[2rem] mt-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-2xl">Desserts</h1>
            <p>(102 recipe)</p>
          </div>
          <div className="flex justify-between">
            <p className="max-w-xl">
              Pizza is not just a dish; it's also part of the Italian culinary
              tradition that has celebrated life, togetherness, and
              deliciousness since ancient times
            </p>
            <select name="" id="">
              <option value="sort">Sort</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-7 mt-10">
          <CardDesserts/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Desserts;
