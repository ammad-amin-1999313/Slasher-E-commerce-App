import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopContext"
import Item from '../Components/Items/Item'
// import dropdown_icon from "/src/Components/Assets/Assets/Frontend_Assets/dropdown_icon.png" 

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div>
      <div>
        <img className='block my-[30px] mx-auto w-[80%]' src={props.banner} alt="" />
      </div>
      <div className='flex flex-col xl:flex-row mx-[20px] xl:mx-[170px] justify-between items-center'>
        <p className='font-semibold'>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='py-[5px] flex items-center gap-[10px]  px-[20px] xl:py-[10px]  xl:px-[20px] text-[13px] xl:text-[16px] rounded-[40px] border-[1px] border-[#888]'>
          Sort by <img  src={props.icon} alt="" />
        </div>
      </div>
      <div className="shopProducts xl:mx-[170px] xl:my-[20px]">
        {all_product.map((product,index)=> {
          if(props.category === product.category) {
            return <Item key={index} id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} />
          }
          else {
            return null
          }
        }) }
      </div>
      <div className="explore flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
