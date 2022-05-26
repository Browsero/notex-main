import React from "react";

import { auth } from "../firebase";

function Navbar() {

  return (
    <div
      onClick={() => {
        auth.signOut();
      }}
    >
      Navbar
    </div>
  );
}

export default Navbar;
