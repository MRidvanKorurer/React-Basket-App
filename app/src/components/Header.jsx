import React, { useContext } from "react";
import { BiShoppingBag } from "react-icons/bi";
import AppContext from "../context/context";
import Search from "./Search";

const Header = () => {
  const { card } = useContext(AppContext);
  return (
    <div className=" flex justify-between items-center border rounded p-4 shadow-xl bg-gray-700 text-white">
      <h1 className=" font-semibold italic text-xl">SEPET UYGULAMASI </h1>
      <div>
        <Search />
      </div>
      <div className=" relative">
        <BiShoppingBag className=" text-xl" />
        <span className=" flex justify-center items-center absolute w-4 h-4 bg-red-500 text-white rounded-full -top-3 text-xs -right-2 ">
          {card.length}
        </span>
      </div>
    </div>
  );
};

export default Header;
