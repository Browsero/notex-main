import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateGlobalQuery } from "../features/appSlice";
import { MdClear } from "react-icons/md";

function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const updateQuery = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query.length > -1) {
      dispatch(updateGlobalQuery({ query }));
    }
  }, [dispatch, query]);

  return (
    <div data-aos='fade-in' className="flex transition items-center bg-zinc-300 rounded-lg">
      <input
      type="text"
      placeholder="Search..."
      className="bg-transparent p-2 rounded-lg w-full outline-none rounded-tr-none rounded-br-none transition focus:bg-zinc-400 focus:text-zinc-50"
      value={query}
      onChange={updateQuery}
    />
   {query.length > 0 &&  <MdClear data-aos='zoom-in' onClick={()=>{setQuery('')}} className="cursor-pointer transition mr-4 m-2 text-2xl bg-zinc-50 rounded-full text-zinc-700 hover:scale-110 hover:text-zinc-500 " />}
    </div>
  );
}

export default Search;
