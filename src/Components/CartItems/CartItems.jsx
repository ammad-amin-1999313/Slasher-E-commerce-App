import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../Components/Assets/Assets/Frontend_Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart , getTotalCartAmount } = useContext(ShopContext);
  // console.log(all_product);
  return (
    <div className="my-[100px] mx-[130px]">
      <div className="main " style={{display:"grid",gridTemplateColumns:"0.5fr 2fr 1fr 1fr 1fr 1fr",alignItems:"center",padding:"20px 0px",color:"#454545",fontSize:"18px",fontWeight:600}} >
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] border-0"/>
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
         return <div>
            <div className="items_format"  style={{display:"grid",gridTemplateColumns:"0.5fr 2.11fr 1fr 1fr 1fr 1fr",alignItems:"center",padding:"20px 0px",color:"#454545",fontSize:"17px",fontWeight:500}}>
              <img src={e.image} className="carticon-product-icon h-[63px]" alt="" />
              <p className="w-[80%]">{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitems-quantity w-[64px] h-[55px] border-2 border-[#ebebeb] bg-white">{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img

                src={remove_icon}
                onClick={() => removeFromCart(e.id)}
                alt="remove_icon"
                className="cursor-pointer w-[15px] my-0 mx-[40px]" 
              />
            </div>
            <hr />
          </div>;
        }
        return null
      })}
      <div className="cart-item-down flex my-[100px] ">
        <div className="total flex-1  flex justify-between  gap-[140px]">
            <div className="w-[80%]">
            <h1 className="font-bold uppercase text-[18px]">cart Totals</h1>

            <div  className="cart-total flex justify-between py-[15px] ">
             <p>SubTotal</p>
             <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total flex justify-between py-[15px] ">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cart-total flex justify-between py-[1px] ">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
            </div>
            <button className="w-[262px] h-[58px] mt-[15px] outline-none border-none bg-[#ff5a5a] text-white font-semibold">Proceed To Checkout</button>
            </div>
            <div className="cart-promo  flex-1 font-medium ">
                <p className="text-[#555] font-semibold">If you have a promo code, Enter it here</p>
                <div className="w-[404px] flex mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea]">
                    <input className="outline-none border-none bg-transparent w-[330px] h-[50px]" type="text" placeholder="promo code" name="" id="" />
                    <button className="w-[176px] h-[58px] bg-black text-white">Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
