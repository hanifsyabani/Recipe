import React from "react";
import CardPizza from "./CardPizza";

const ListRecipe = () => {
  return (
    <div className="container px-[7%] py-[2rem] mt-6">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-2xl">Pizza</h1>
          <p>(98 recipe)</p>
        </div>
        <div className="flex justify-between">
          <p className="max-w-xl">Pizza is not just a dish; it's also part of the Italian culinary tradition that has celebrated life, togetherness, and deliciousness since ancient times</p>
          <select name="" id="">
            <option value="sort">Sort</option>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-7 mt-10">
        <CardPizza/>
      </div>
    </div>
  );
};

export default ListRecipe;
