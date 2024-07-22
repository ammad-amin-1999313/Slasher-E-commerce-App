import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/Assets/Frontend_Assets/all_product";
const getDefaultcart = () => {
  let cart = {}
  for(let index=0; index <all_product.length+1;index++) {
    cart[index] = 0
    // console.log(cart);
  }
  return cart
}
export const ShopContext = createContext(null);

const ShopProvider = (props) => {
  const[cartItems,setCartItems]=useState(getDefaultcart())
  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems);
  }

  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const ContextValue = {all_product,cartItems,addToCart,removeFromCart};
  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider