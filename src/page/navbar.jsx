import React from "react";
import NavSm from "../components/navSm";

import { Link } from "react-router-dom";
import { CiSearch, CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";



const navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");

  return (
    <>
      <nav className="flex justify-between items-center lg:hidden px-5 pt-4">
        <Link to="search">
          <CiSearch size={25} />
        </Link>
        <h1
          className="text-3xl font-semibold text-center font-[Lobster]"
          
        >
          Lidah Suka
        </h1>
        <div className="relative" >
          <RiMenu3Fill
            size={25}
            onClick={onOpen}
            className="cursor-pointer fixed right-5"
          />
        </div>
      </nav>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <h1 className="text-5xl font-semibold text-center font-[Lobster] mt-10">
            Lidah Suka
          </h1>
          <DrawerBody>
            <div className="list-none mt-5 text-center">
              <Link to="/">
                <li className="mb-2">Homepage</li>
              </Link>
              <Link to="/about">
                <li className="mb-2">About</li>
              </Link>
              <Link to="/categories">
                <li className="mb-2">Categories</li>
              </Link>
            </div>
            <div className="flex justify-center items-center gap-4 mt-20">
              <CiFacebook
                size={25}
                className="cursor-pointer hover:text-green-600"
              />
              <CiInstagram
                size={25}
                className="cursor-pointer hover:text-green-600"
              />
              <CiTwitter
                size={25}
                className="cursor-pointer hover:text-green-600"
              />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <nav className="hidden lg:block">
        <NavSm />
        <h1 className="text-5xl font-semibold text-center font-[Lobster] mt-10">
          Lidah Suka
        </h1>
        <div className="flex justify-center items-center gap-10 list-none mt-5">
          <a href="">
            <li>Homepage</li>
          </a>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/kategori">
            <li>Categories</li>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default navbar;
