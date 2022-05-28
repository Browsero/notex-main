import React from "react";
import { BsTrash, BsPen } from "react-icons/bs";

function AdvancedNotePrev({ title }) {
  return (
    <div className="bg-zinc-100 shadow-lg flex flex-col p-8 w-96 rounded-lg justify-between gap-12">
      <p className="text-xl">{title}</p>
      <div className="flex gap-4 w-full justify-between">
        <BsPen className="text-2xl cursor-pointer transition hover:scale-110" />
        <BsTrash className="text-2xl cursor-pointer transition hover:scale-110" />
      </div>
    </div>
  );
}

export default AdvancedNotePrev;
