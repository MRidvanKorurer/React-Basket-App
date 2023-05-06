import React, { useContext } from "react";
import AppContext from "../context/context";

const Basket = () => {
  const { setCard, card } = useContext(AppContext);

  const total = card.reduce((acc, item) => acc + item.price, 0);

  const handleClickDeleteToBasket = () => {
    setCard([]);
  };

  return (
    <div className=" w-full ml-auto mt-4 border shadow-xl rounded p-1">
      <h2 className=" font-semibold italic">SEPET</h2>
      <ul>
        {card.map((item) => {
          return (
            <div key={item.id}>
              <div className=" flex justify-between mt-1 items-center">
                <li>{item.title}</li>
                <span className=" italic font-semibold">${item.price}</span>
              </div>
              <hr />
            </div>
          );
        })}
      </ul>
      <hr />
      <p className=" italic font-semibold">Toplam: ${total}</p>
      <button
        onClick={handleClickDeleteToBasket}
        className=" mt-2 bg-red-500 text-white w-full hover:bg-red-600 transition-all p-1 rounded"
      >
        Sepeti Temizle
      </button>
    </div>
  );
};

export default Basket;
