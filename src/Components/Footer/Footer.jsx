import React from 'react'
import footer_logo from "../../Components/Assets/Assets/Frontend_Assets/logo_big.png"
import instagram_icon from "../../Components/Assets/Assets/Frontend_Assets/instagram_icon.png"
import pinstart_icon from "../../Components/Assets/Assets/Frontend_Assets/pintester_icon.png"
import whatsapp_icon from "../../Components/Assets/Assets/Frontend_Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[50px]'>
    <div className='flex items-center gap-[20px]'>
      <img src={footer_logo} alt="" />
      <p className='text-[#383838] text-[46px] font-bold'>SHOPPER</p>
    </div>
    <ul className='flex text-[20px] gap-[50px]  text-[#252525]'>
      <li className='cursor-pointer'>Company</li>
      <li className='cursor-pointer'>Products</li>
      <li className='cursor-pointer'>Office</li>
      <li className='cursor-pointer'>About</li>
    </ul>
      <div className='flex gap-[20px]'>
        <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]'>
          <img src={instagram_icon} alt="" />
        </div>
        <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]'>
          <img src={pinstart_icon} alt="" />
        </div>
        <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]'>
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className='flex w-full flex-col mb-[30px] gap-[30px] text-[#1a1a1a] text-[20px] items-center'>
      <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]'  />
        <p>copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
