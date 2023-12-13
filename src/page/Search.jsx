import React, { useState } from 'react'
import NavbarPages from '../components/NavbarPages'
import Footer from './Footer'
import CardSearch from '../components/CardSearch'


const Search = () => {

  const[search,setSearch] = useState('')

  const [dataRecipe, setDataRecipe] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=99d7bf4ee3e6479f86d9a89e7437a4fe&query=${search}&number=30&includeIngredients`
      );
      const data = await response.json();
      setDataRecipe(data.results);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(dataRecipe);

  return (
    <>
      <NavbarPages/>
      <div className='container px-[5%] py-[2rem]'>
        <h1 className='font-[kalam] text-3xl font-bold'>Search Result</h1>
        <input type="search" placeholder='Search your recipe...' className='p-2 w-full border-b-4 outline-none mt-8' required value={search} onChange={(e)=>setSearch(e.target.value)} onKeyUp={handleSearch}/>
      </div>
      <CardSearch dataRecipe={dataRecipe}/>
      <Footer/>
    </>
  )
}

export default Search