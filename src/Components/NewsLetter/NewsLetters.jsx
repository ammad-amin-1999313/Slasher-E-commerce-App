import React from 'react'
import "./NewsLetter.css"

const NewsLetters = () => {
  return (
    <div className='news_letter xl:w-[85%] mx-auto pt-10 xl:h-[40vh] flex flex-col items-center justify-center xl:px-[140px] gap-[30px] mb-[150px]'>
    <h1 className='text-[#454545] sm:text-[35px] xl:text-[45px] font-semibold'>Get Exclusive Offers On Your Email</h1>
    <p className='text-[#454545] text-[14px] sm:text-[25px]  xl:text-[20px]'>Subscribe to our newsletter and stay updated</p>
    <div className='flex flex-col md:flex-row items-center justify-between bg-white w-[80%]  sm:w-[50%] md:w-[500px] gap-6 xl:w-[730px] h-[40px] xl:h-[70px] rounded-[20px]  md:rounded-[40px] xl:rounded-[80px] border-[1px] border-[#918e8e] lg:border-[#e3e3e3]'>
        <input className='w-full md:w-[500px] xl:w-[500px]  px-4 py-1 xl:ml-[30px] rounded-xl  border-none outline-none text-[#616161] poppins text-[16px]' type="email" placeholder='Your Email id' name="" id="" />
        <button className='text-white w-full md:w-[190px] lg:w-full md:rounded-[40px] md:py-0 md:h-[40px] xl:w-[210px] py-2 rounded-[20px] xl:rounded-[80px]  xl:h-[70px] bg-black'>Subscribe</button>
    </div>
    </div>
  ) 
}

export default NewsLetters
