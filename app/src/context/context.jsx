import React, { useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [card, setCard] = useState([]);
  const [search, setSearch] = useState("");

  async function fetch() {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=12"
      );
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const sharedValuesAndMethods = {
    data,
    setData,
    card,
    setCard,
    fetch,
    search,
    setSearch,
  };

  return (
    <AppContext.Provider value={sharedValuesAndMethods}>
      {children}
    </AppContext.Provider>
  );
};

export { Provider };
export default AppContext;
