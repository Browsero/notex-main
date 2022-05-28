import React, { useState } from "react";
import { Link } from "react-router-dom";
import {BiNote} from 'react-icons/bi'
import { GrDocumentNotes } from 'react-icons/gr'

function MobileMenu() {
  const [display, setDisplay] = useState(false);

  return (
    <div className="lg:hidden flex gap-8">
      <Link to='/'><BiNote className="text-zinc-700" /></Link>
      <Link to='advanced'><GrDocumentNotes /></Link>
    </div>
  );
}

export default MobileMenu;
