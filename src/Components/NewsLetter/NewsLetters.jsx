import React from 'react'
import "./NewsLetter.css"

const NewsLetters = () => {
  return (
    <div className='news_letter w-[85%] mx-auto pt-10 h-[40vh] flex flex-col items-center justify-center px-[140px] gap-[30px] mb-[150px]'>
    <h1 className='text-[#454545] text-[45px] font-semibold'>Get Exclusive Offers On Your Email</h1>
    <p className='text-[#454545] text-[20px]'>Subscribe to our newsletter and stay updated</p>
    <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-[1px] border-[#e3e3e3]'>
        <input className='w-[500px] ml-[30px] border-none outline-none text-[#616161] poppins text-[16px]' type="email" placeholder='Your Email id' name="" id="" />
        <button className='text-white w-[210px] rounded-[80px] h-[70px] bg-black'>Subscribe</button>
    </div>
    </div>
  )
}

export default NewsLetters
