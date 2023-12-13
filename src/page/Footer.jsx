import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container px-[7%] py-[2rem] mt-10">
      <div  className="lg:flex gap-40">
        <div className="lg:w-1/2 ">
          <h1 className="font-[kalam] text-xl font-bold">Lidah Suka</h1>
          <p className="text-gray-600">
            "On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment"
          </p>
        </div>
        <div className="lg:flex gap-20 w-1/2">
          <div className="mt-6">
            <h3 className="font-bold mb-3">Pages</h3>
            <ul className="text-gray-600">
              <Link to='/about'><li className="mb-2 cursor-pointer">About us</li></Link>
              <li className="mb-2 cursor-pointer">Careers</li>
              <li className="mb-2 cursor-pointer">Contact Us</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="font-bold mb-3">Legal</h3>
            <ul className="text-gray-600">
              <li className="mb-2 cursor-pointer">Terms</li>
              <li className="mb-2 cursor-pointer">Conditions</li>
              <li className="mb-2 cursor-pointer">Cookies</li>
              <li className="mb-2 cursor-pointer">Copyright</li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="font-bold mb-3">Follow</h3>
            <ul className="text-gray-600">
              <li className="mb-2 cursor-pointer">Facebook</li>
              <li className="mb-2 cursor-pointer">Twitter</li>
              <li className="mb-2 cursor-pointer">Instagram</li>
              <li className="mb-2 cursor-pointer">Youtube</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between items-center mt-10 text-sm text-center lg:text-left">
        <p>Copyright &copy; 2022. All rights reserved.</p>
        <div>
          <p>Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
