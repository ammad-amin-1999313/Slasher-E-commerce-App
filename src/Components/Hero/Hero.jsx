import React from 'react'
import "./Hero.css";
import hand_icon from "../Assets/Assets/Frontend_Assets/hand_icon.png"
import arrow_icon from "../Assets/Assets/Frontend_Assets/arrow.png"
import hero_image from "../Assets/Assets/Frontend_Assets/hero_image.png"
const Hero = () => {
  return (
    <div className='hero border-2 flex h-[100vh]' >
      <div className="left flex-1 flex flex-col justify-center gap-[20px] pl-[180px] line" style={{lineHeight:'1.1'}} >
        <h2 className='text-[#090909] text-[26px] font-semibold'>New Arrivals only</h2>
        <div>
            <div className="hero-icon flex items-center gap-[20px]">
                <p className='text-[#171717] text-[100px] font-bold '>new</p>
                <img className='w-[105px]' src={hand_icon} alt="" />
            </div>
            <p className='text-[#171717] text-[100px] font-bold '>collections</p>
            <p className='text-[#171717] text-[100px] font-bold '>for everyone</p>
        </div>
        <div className="lastest-btn flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium">
            <div>latest colletion</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="flex-1 flex justify-center right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
