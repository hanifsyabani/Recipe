import React from "react";
import NavbarPages from "../../components/NavbarPages";

import pizza from "../../assets/pizza-min.jpg";
import pasta from "../../assets/pasta-min.jpg";
import vegan from "../../assets/vegan-min.jpg";
import breakfast from "../../assets/breakfast-min.jpg";
import smootis from "../../assets/smootis-min.jpg";
import dessert from "../../assets/desserts-min.jpg";
import ayam from "../../assets/ayam.jpg";
import cake from "../../assets/cake.jpg";
import pastries from "../../assets/pastries.jpg";
import ramen from "../../assets/ramen.jpg";
import burger from "../../assets/burger.jpg";
import soup from "../../assets/soup.jpg";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const listCategories = [
  {
    id: 1,
    name: "Pizza",
    link: "/pizza/pizza",
    img: pizza,
  },
  {
    id: 2,
    name: "Pasta",
    link: "/pasta/pasta",
    img: pasta,
  },
  {
    id: 3,
    name: "Breakfast",
    link: "/breakfast/breakfast",
    img: breakfast,
  },
  {
    id: 4,
    name: "Smooties",
    link: "/smooties/smooties",
    img: smootis,
  },
  {
    id: 5,
    name: "Vegan",
    link: "/vegan/vegan",
    img: vegan,
  },
  {
    id: 6,
    name: "Dessert",
    link: "/dessert/dessert",
    img: dessert,
  },
  {
    id: 7,
    name: "Chicken",
    link: "/chicken/chicken",
    img: ayam,
  },
  {
    id: 8,
    name: "Cake",
    link: "/cake/cake",
    img: cake,
  },
  {
    id: 9,
    name: "Pastries",
    link: "/pastries/pastries",
    img: pastries,
  },
  {
    id: 10,
    name: "Ramen",
    link: "/ramen/ramen",
    img: ramen,
  },
  {
    id: 11,
    name: "Burger",
    link: "/burger/burger",
    img: burger,
  },
  {
    id: 12,
    name: "Soup",
    link: "/soup/soup",
    img: soup,
  },
];

const Kategori = () => {
  return (
    <>
      <NavbarPages />
      <div className="container px-[5%] py-[2rem]">
        <h1 className="font-[kalam] text-4xl font-bold">Categories</h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 text-center mt-14">
          {listCategories.map((item) => (
            <Link to={item.link} key={item.id}>
              <div className="hover:-translate-y-3 duration-300 linear">
                <img
                  src={item.img}
                  alt=""
                  className="w-32 h-32 lg:w-44 lg:h-44 rounded-full mx-auto"
                />
                <h1 className="font-semibold">{item.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kategori;
