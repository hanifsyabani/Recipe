import { useRef, useState } from "react";
import Navbar from "./page/navbar";
import Jumbotron from "./page/Jumbotron";
import Categories from "./page/Categories";
import RecipeList from "./page/RecipeList";
import LatestRecipes from "./page/LatestRecipes";
import Inbox from "./page/Inbox";
import Footer from "./page/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pizza from "./components/Pizza/Pizza";
import Pasta from './components/Pasta/Pasta'
import Breakfast from './components/Breakfast/Breakfast'
import Smooties from './components/Smooties/Smooties'
import Vegan from "./components/Vegan/Vegan";
import Desserts from "./components/Desserts/Desserts";
import Kategori from './page/Kategori/Kategori'
import About from "./page/About";
import Search from "./page/Search";
import Chicken from "./components/Chicken/Chicken";

function App() {
  const [dataRecipe, setDataRecipe] = useState([]);

 
  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Jumbotron />
                <Categories />
                <RecipeList
                  dataRecipe={dataRecipe}
                  setDataRecipe={setDataRecipe}
                />
                <LatestRecipes />
                <Inbox />
                <Footer />
              </>
            }
          />
          <Route path="/pizza/:category" element={<Pizza  />} />
          <Route path="/pasta/:category" element={<Pasta />} />
          <Route path="/breakfast/:category" element={<Breakfast />} />
          <Route path="/smooties/:category" element={<Smooties />} />
          <Route path="/vegan/:category" element={<Vegan />} />
          <Route path="/dessert/:category" element={<Desserts />} />
          <Route path="/chicken/:category" element={<Chicken />} />
          <Route path="/kategori" element={<Kategori/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="*" element={
            <div className="container text-center font-[poppins] mt-20">
              <h1 className="font-bold text-2xl">404</h1>
              <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1702178425~exp=1702179025~hmac=44fccd798e150125b30d49e4e5939a879213b643346b481d1adf85551169c4c1" alt="" className="mx-auto w-52 h-52"/>
            </div>
          
          } />
        </Routes>
      </>
    </Router>
  );
}

export default App;
