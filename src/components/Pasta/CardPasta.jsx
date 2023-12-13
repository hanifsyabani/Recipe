import React from "react";

import { useState, useEffect } from "react";

import axios from "axios";
import ModalLatest from "../ModalLatest";

const CardPizza = () => {
  const [dataPasta, setDataPasta] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/random?tags=pasta&number=30&apiKey=99d7bf4ee3e6479f86d9a89e7437a4fe"
        );
        setDataPasta(response.data.recipes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[]);

  return (
    <>
      {dataPasta && dataPasta.map((item, index) => (
        <div className="w-[12rem] mb-6" key={index}>
          <img src={item.image} alt="" className="w-full rounded-lg" />
          <ModalLatest dataRecipe={item}/>
        </div>
      ))}
    </>
  );
};

export default CardPizza;
