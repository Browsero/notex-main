import React from "react";

import { auth } from "../firebase";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

import MobileMenu from "./UI/MobileMenu";

function Navbar() {
  return (
    <div className="flex justify-between items-center text-3xl w-full p-8 shadow-sm md:mb-8">
      <h1 className="md:ml-32">
        Note<span className="text-purple-500 font-bold">X</span>
      </h1>
      <div className="gap-16 hidden lg:flex">
        <ul className="flex text-lg gap-16">
          <Link to='/'><li className="cursor-pointer text-zinc-600 transition duration-150 hover:text-color-zinc-700 hover:font-bold">Quick Notes</li></Link>
          <Link to='advanced'> <li className="cursor-pointer text-zinc-600 transition duration-150 hover:text-color-zinc-700 hover:font-bold">Advanced Notes</li></Link>
        </ul>
      <BiLogOut
      className="cursor-pointer text-zinc-600 md:mr-32"
        onClick={() => {
          auth.signOut();
        }}
      />
      </div>
      <MobileMenu />
    </div>
  );
}

export default Navbar;
