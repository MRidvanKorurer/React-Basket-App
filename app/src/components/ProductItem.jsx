import React, { useContext } from "react";
import AppContext from "../context/context";

const ProductItem = ({ item }) => {
  const { setCard } = useContext(AppContext);

  const handleClickAddToBasket = () => {
    setCard((prevState) => [...prevState, item]);
  };

  return (
    <div className=" border  rounded shadow-xl w-full h-full flex flex-col gap-2 justify-between">
      <img className=" h-56 rounded-t" src={item.image} alt="" />
      <div className=" flex flex-col">
        <h3 className=" font-light">{item.title}</h3>
        <span className=" font-semibold italic">${item.price}</span>
        <button
          onClick={handleClickAddToBasket}
          className=" w-full bg-blue-600 text-white hover:bg-blue-700
         transition-all p-1 rounded "
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
