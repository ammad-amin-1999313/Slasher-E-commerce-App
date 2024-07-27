import React from 'react'
import "./Hero.css";
import hand_icon from "../Assets/Assets/Frontend_Assets/hand_icon.png"
import arrow_icon from "../Assets/Assets/Frontend_Assets/arrow.png"
import hero_image from "../Assets/Assets/Frontend_Assets/hero_image.png"
const Hero = () => {
  return (
    <div className='hero  flex flex-col  md:flex-row  py-[40px]  xl:h-[100vh]' >
      <div className="left flex-1 flex flex-col justify-center gap-[20px]   xl:pl-[180px] line" style={{lineHeight:'1.1'}} >
        <h2 className='text-[#090909] text-[22px] pl-[50px] xl:pl-0 xl:text-[26px] font-semibold'>New Arrivals only</h2>
        <div>
            <div className="hero-icon flex items-center pl-[50px] xl:pl-0 gap-[20px]">
                <p className='text-[#171717] text-[40px] xl:text-[100px] font-bold '>new</p>
                <img className='w-[105px]' src={hand_icon} alt="" />
            </div>
            <p className='text-[#171717] text-[40px] xl:text-[100px] pl-[50px] xl:pl-0 font-bold '>collections</p>
            <p className='text-[#171717] text-[40px] xl:text-[100px] pl-[50px] xl:pl-0 font-bold '>for everyone</p>
        </div>
        <div className="lastest-btn flex justify-center items-center gap-[15px] w-[80%] mx-auto xl:mx-0 md:w-[270px] xl:w-[310px] h-[50px] xl:h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white xl:text-[22px] font-medium">
            <div>Latest Colletion</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="flex-1  md:flex justify-center right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
