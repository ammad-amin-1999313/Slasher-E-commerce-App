import React from 'react'

const LoginSignup = () => {
  return (
    <div className='w-full  bg-[#fce3fe] mb-[30px] pb-[40px] pt-[40px] md:pb-[100px]  md:pt-[100px]'>
      <div className='w-full md:w-[650px] xl:w-[680px] xl:h-[670px] bg-white m-auto  py-[40px] px-[30px] md:px-[60px]'>
        <h1 className='my-[20px] text-[30px] font-semibold'>Sign Up</h1>
        <div className='flex flex-col mt-[30px] gap-[29px]'>
          <input className='w-full rounded-xl h-[40px] md:h-[72px] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] md:text-[18px]' type="text" name="name" id="name" placeholder='Your Name' />
          <input className='w-full rounded-xl h-[40px] md:h-[72px] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] md:text-[18px]'  type="email" name="email" id="email" placeholder='Email Address' />
          <input className='w-full rounded-xl h-[40px] md:h-[72px] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] md:text-[18px]'  type="password" name="password" id="password" placeholder='Your Passowrd' />
        </div>
        <button className='w-full rounded-xl h-[40px] md:h-[72px] text-white bg-[#ff4141] mt-[30px] border-none md:text-[24px] font-medium '>Continue</button>
        <p className='mt-[20px] text-[#5c5c5c] text-[18px] font-medium'>Already have an account? <span className='text-[#ff4141] font-semibold'>Login here</span> </p>
        <div className='flex items-center mt-[20px] gap-[10px]  md:gap-[20px] text-[#5c5c5c] md:text-[18px] font-medium'>
          <input type="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
