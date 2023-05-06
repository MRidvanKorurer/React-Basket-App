import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";
import AppContext from "./context/context";

function App() {
  const { fetch, search, card } = useContext(AppContext);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className=" container mx-auto p-4">
      <Header />
      {card.length > 0 && <Basket />}
      <Product />
    </div>
  );
}

export default App;
