import React, { useContext } from "react";
import AppContext from "../context/context";

const Search = () => {
  const { search, setSearch, setData, data } = useContext(AppContext);

  function handleChange(e) {
    const filtered = data.filter((item) => {
      setSearch(e.target.value);
      if (search == "") {
        return data;
      }
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    setData(filtered);
  }

  // console.log(data);

  return (
    <div className=" w-72 ">
      <input
        type="search"
        placeholder="Ara..."
        className=" rounded  w-full mr-auto  text-black font-extralight p-1"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
