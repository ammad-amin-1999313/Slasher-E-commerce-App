import React from 'react'
import data_product from "../Assets/Assets/Frontend_Assets/data"
import Item from '../Items/Item'
const Popular = () => {
  return (
    <div className='flex flex-1 flex-col items-center mt-[150px] gap-[10px] h-[90vh]'>
      <h1 className='uppercase text-[#171717] font-semibold text-[50px]'>Popular in women</h1>
      <hr  className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className='mt-[50px]  flex gap-[30px]'>
        {data_product.map((data,i)=>{
            return <Item key={i} id={data.id} name={data.name} image={data.image} new_price={data.new_price} old_price={data.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular
