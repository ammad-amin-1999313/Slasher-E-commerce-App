import React, { createContext } from "react";
import all_product from "../Components/Assets/Assets/Frontend_Assets/all_product";

export const ShopContext = createContext(null);
const ShopProvider = (props) => {
  const ContextValue = {all_product};
  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider