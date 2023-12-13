import React from "react";
import ModalLatest from "./ModalLatest";

const CardSearch = ({ dataRecipe }) => {
  return (
    <>
      <div className="flex justify-center items-center gap-10 flex-wrap lg:mb-44">
        {dataRecipe.map((item, index) => (
          <div className="w-[12rem] mb-6" key={index}>
            <img src={item.image} alt="" className="w-44 lg:w-full rounded-lg" />
            <h1
              className="font-semibold mt-4 hover:underline cursor-pointer"
            >
              {" "}
              {item.title
                ? item.title.length > 35
                  ? item.title.slice(0, 35) + "..."
                  : item.title
                : " "}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardSearch;
