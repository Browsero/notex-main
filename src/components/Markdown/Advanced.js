import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdvancedNotePrev from "./AdvancedNotePrev";

function Advanced() {
  return (
    <div className="p-8 flex flex-col h-screen gap-4 items-center  md:w-3/4 md:mx-auto">
      <div>
        <Link to="editor">
          <button className="bg-purple-500 p-4 text-bold text-white rounded-lg shadow-lg mb-16 transition duration-150 hover:bg-purple-600">
            Create New Note
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap gap-8">
        <AdvancedNotePrev title="Note Title" />
      </div>
    </div>
  );
}

export default Advanced;
