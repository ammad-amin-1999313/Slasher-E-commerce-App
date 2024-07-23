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
    console.log(itemId);
  }
 

  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  const getTotalCartAmount = ()=>{
    let totalAmount=0;
    for(const item in cartItems) {
      if(cartItems[item] > 0 ) 
        {
        let itemInfo = all_product.find((product)=>product.id === Number(item))
        console.log("info",itemInfo);
        totalAmount+= itemInfo.new_price * cartItems[item]
      }
    }
    return totalAmount
  }

  const getTotalCartItems = ()=>{
    let totalItem = 0
    for(const item in cartItems)
       {
      if(cartItems[item]>0){
        totalItem+= cartItems[item]
      }
    }
   return totalItem
  }

  const ContextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};
  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider