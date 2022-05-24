import React from "react";
import Notes from "./components/Notes";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex p-8 w-full mx-auto flex-col md:w-1/2 gap-16">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="font-bold text-4xl">Notes</h1>
        <Search />
      </div>
      <Notes />
    </div>
  );
}

export default App;
