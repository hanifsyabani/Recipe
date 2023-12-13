import React from "react";
import { FaStar } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import ModalBox from "./ModalBox";

const CardDelicious = ({ dataRecipe }) => {
  return (
    <div className="flex justify-center items-center mt-10 flex-wrap gap-8">
      {dataRecipe.map((item, index) => (
        <div className="w-[17rem]" key={index}>
          <img src={item.image} alt="" className="w-full h-36 rounded-t-lg" />
          <div className="pt-6 p-2 border border-gray-500 rounded-b-lg">
            <div className="flex gap-2">
              <FaStar size={12} color="orange" />
              <FaStar size={12} color="orange" />
              <FaStar size={12} color="orange" />
              <FaStar size={12} color="orange" />
              <FaStar size={12} color="orange" />
            </div>
            <h1 className="font-[poppins] text-md font-bold">
              {item.title
                ? item.title.length > 20
                  ? item.title.slice(0, 20) + "..."
                  : item.title
                : " "}
            </h1>
            <div className="flex gap-3 items-center mt-2">
              <div className="w-7 h-7 bg-gray-400 rounded-full"></div>
              <p className="text-sm">Hanif Lutfi</p>
            </div>
            <div className="flex items-center justify-end gap-3 mt-12">
              <ModalBox dataRecipe={item}/>
              <div className="flex items-center justify-center gap-2">
                <CiHeart size={25} color="black" />
                <p className="text-sm">{item.aggregateLikes}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDelicious;
