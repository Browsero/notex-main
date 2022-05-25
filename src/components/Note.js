import React from "react";
import { BsTrash } from "react-icons/bs";

function Note({ id, content, date, removeNote }) {
  return (
    <div
      data-aos="zoom-in"
      id={id}
      className="bg-yellow-300 h-max p-4 flex flex-col justify-between rounded-lg shadow-lg md:h-64"
    >
      <p className="h-max p-1 break-normal break-words">{content}</p>
      <div className="flex justify-between">
        <p>{date}</p>
        <BsTrash
          onClick={() => {
            removeNote(id);
          }}
          className="text-2xl cursor-pointer transition hover:scale-110"
        />
      </div>
    </div>
  );
}

export default Note;
