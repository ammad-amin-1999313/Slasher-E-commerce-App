import React from 'react'
import exclusive_image from "../Assets/Assets/Frontend_Assets/exclusive_image.png"
import "./Offers.css"

const Offers = () => {
  return (
    <div className='offers w-[85%] h-[80vh] flex m-auto px-[140px] my-[150px]'>
      <div className="offer_left flex-1 flex flex-col justify-center">
        <h1 className='text-[#171717] text-[70px] uppercase font-semibold'>exclusive</h1>
        <h1 className='text-[#171717] text-[70px] font-semibold'>Offers For You</h1>
        <p className='text-[22px] font-semibold uppercase  text-[#171717]'>only on best sellers products</p>
        <button className='w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-medium mt-[30px]'>Check Now</button>
      </div>
      <div className="offer_right flex-1 flex justify-end items-center pt-[50px]">
        <img src={exclusive_image} alt="exclusive_image" />
      </div>
    </div>
  )
}

export default Offers
