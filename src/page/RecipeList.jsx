import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import CardDelicious from "../components/CardDelicious";

const RecipeList = ({dataRecipe, setDataRecipe}) => {
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/random?number=6&apiKey=99d7bf4ee3e6479f86d9a89e7437a4fe"
        );
        setDataRecipe(response.data.recipes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container px-[7%] py-[2rem]">
      {console.log(dataRecipe)}
      <h1 className="font-[kalam] text-2xl font-bold">Super Delicious</h1>
     
      <CardDelicious dataRecipe={dataRecipe} />
      
    </div>
  );
};

export default RecipeList;
