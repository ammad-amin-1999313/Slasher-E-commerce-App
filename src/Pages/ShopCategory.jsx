import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopContext"
import Item from '../Components/Items/Item'
// import dropdown_icon from "/src/Components/Assets/Assets/Frontend_Assets/dropdown_icon.png" 

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  console.log(all_product);
  return (
    <div>
      <div>
        <img src={props.banner} alt="" />
      </div>
      <div>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div>
          Sort by <img src={props.icon} alt="" />
        </div>
      </div>
      <div>
        {all_product.map((product,index)=> {
          if(props.category === product.category) {
            return <Item key={index} id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} />
          }
          else {
            return null
          }
        }) }
      </div>
    </div>
  )
}

export default ShopCategory
