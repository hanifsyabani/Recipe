import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalLatest from "./ModalLatest";

const CardLatest = () => {
  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/random?number=30&apiKey=99d7bf4ee3e6479f86d9a89e7437a4fe"
        );
        setLatestData(response.data.recipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLatest();
  }, []);

  console.log(latestData);

  return (
    <>
      {latestData.map((item, index) => (
        <div className="w-[12rem] mb-6" key={index}>
          <img src={item.image} alt="" className="w-32 mx-auto lg:w-full rounded-lg"/>
          <ModalLatest dataRecipe={item}/>
        </div>
      ))}
    </>
  );
};

export default CardLatest;
