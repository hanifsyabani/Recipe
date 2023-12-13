import React, { useEffect, useState } from "react";
import axios from "axios";


const Nutritions = () => {

  return (
    <div className="mt-10 w-full lg:w-[30%]  lg:border-l border-gray-300 lg:pl-10">

      <div className="bg-orange-300 py-8 px-7 lg:w-[20rem] rounded-md">
        <h1 className="font-[kalam] text-3xl text-center font-bold max-w-xs mx-auto">
          Deliciousness to your inbox
        </h1>
        <p className="mt-3  max-w-sm text-center">
          Enjoy weekly hand picked recipes and recommendations
        </p>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Enter your email" 
            className="p-2 w-full"
          />
          <div className="p-2 bg-orange-600 text-white font-semibold mt-4 rounded-md text-center">
            <button>Join</button>
          </div>
        </div>
        <p className="text-xs text-center mt-2">
          By joining our newsletter you agree to receive special offers and
          updates
        </p>
      </div>
      
    </div>
  );
};

export default Nutritions;
