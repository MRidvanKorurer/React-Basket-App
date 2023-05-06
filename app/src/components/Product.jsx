import React, { useContext } from "react";
import AppContext from "../context/context";
import ProductItem from "./ProductItem";

const Product = () => {
  const { data } = useContext(AppContext);

  return (
    <div className=" grid grid-cols-4 gap-10 mt-8">
      {data.map((item) => {
        return <ProductItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Product;
