import React from 'react'
import arrow_icon from "../Assets/Assets/Frontend_Assets/breadcrum_arrow.png"

const BreadCrum = (props) => {
    const {product} =props
  return (
    <div className='flex flex-wrap items-center gap-[8px] text-[#5e5e5e] text-[16px] font-semibold my-[40px] md:my-[60px] mx-[20px] md:mx-[90px] lg:mx-[130px] xl:mx-[150px] uppercase'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name} 
    </div>
  )
}

export default BreadCrum
