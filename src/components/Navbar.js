import React from "react";

import { auth } from "../firebase";
import { BiLogOut } from "react-icons/bi";

function Navbar() {
  return (
    <div className="flex justify-between text-3xl w-full p-8 shadow-sm md:mb-8">
      <h1 className="md:ml-32">
        Note<span className="text-purple-500 font-bold">X</span>
      </h1>
      <BiLogOut
      className="cursor-pointer md:mr-32"
        onClick={() => {
          auth.signOut();
        }}
      />
    </div>
  );
}

export default Navbar;
