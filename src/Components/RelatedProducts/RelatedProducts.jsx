import React from 'react'
import data_product from "../Assets/Assets/Frontend_Assets/data.js"
import Item from '../Items/Item'
import "../Popular/Popular.css"

const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] mb-10 md:mb-0 xl:h-[90vh]'>
      <h1 className='text-[#171717] text-[25px] xl:text-[50px] font-semibold'>Realted Products</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
      <div className="items mt-[50px] flex flex-wrap popular gap-[30px]">
        {data_product.map((item, index) => {
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
