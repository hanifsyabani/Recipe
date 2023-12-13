import React from "react";
import { CiFacebook, CiInstagram, CiTwitter, CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const navSm = () => {
  return (
    <div className="w-full flex items-center justify-between py-2 px-[7%]">
      <div className="flex gap-4">
        <CiFacebook size={20} className="cursor-pointer hover:text-green-600"/>
        <CiInstagram size={20} className="cursor-pointer hover:text-green-600"/>
        <CiTwitter size={20} className="cursor-pointer hover:text-green-600"/>
      </div>
      <div className="flex items-center gap-6">
        <Link to='/search'>
          <CiSearch size={20} />
        </Link>
        <div className="border-2 px-2 border-black text-sm py-1 rounded-sm">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};
export default navSm;
