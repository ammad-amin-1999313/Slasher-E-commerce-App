import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../Components/Assets/Assets/Frontend_Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  console.log(all_product);
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
      <div className="cart-item-down">
        <div className="total">
            <h1>cart Totals</h1>
            <div>

            <div className="total-item">
             <p>SubTotal</p>
             <p>${0}</p>
            </div>
            <hr />
            <div className="cart-total">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cart-item">
                <h3>Total</h3>
                <h3>${0}</h3>
            </div>
            <button>Proceed To Checkout</button>
            </div>
            <div className="cart-promo">
                <p>If you have a promo code, Enter it here</p>
                <div>
                    <input type="text" placeholder="promo code" name="" id="" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
