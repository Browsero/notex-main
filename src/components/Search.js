import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateGlobalQuery } from "../features/appSlice";

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
    <input
      type="text"
      placeholder="Search..."
      className="bg-zinc-300 p-2 rounded-lg w-full outline-none transition focus:bg-zinc-400 focus:text-zinc-50"
      value={query}
      onChange={updateQuery}
    />
  );
}

export default Search;
