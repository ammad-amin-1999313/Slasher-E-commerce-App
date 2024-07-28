import React, { useContext } from 'react'
import star_icon_dull from "../Assets/Assets/Frontend_Assets/star_dull_icon.png"
import star_icon from "../Assets/Assets/Frontend_Assets/star_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} =props
    const{addToCart} = useContext(ShopContext)
  return (
    <div className='lg:flex mx-[130px]'>
    <div className="product_left flex gap-[17px]">
        <div className="img_list flex flex-col gap-[16px]">
            <img className='h-[135px]' src={product.image} alt="" />
            <img className='h-[135px]' src={product.image} alt="" />
            <img className='h-[135px]' src={product.image} alt="" />
            <img className='h-[135px]' src={product.image} alt="" />
        </div>
        <div className="main_img w-[586px]">
            <img width={586} height={700} src={product.image} alt="" />
        </div>
    </div>
    <div className="product_right mx-[40px] flex flex-col">
        <h1 className='text-[#3d3d3d] text-[40px] font-bold'>{product.name}</h1> 
        <div className="star flex items-center mt-[13px] gap-[5px] text-[#1c1c1c]">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon_dull} alt="" />
            <p>(122)</p>
        </div>
        <div className="prices flex my-[40px] gap-[30px] text-[24px] font-bold">
            <div className="old_price text-[#818181] line-through">${product.old_price}</div>
            <div className="new_price text-[#ff4141]">${product.new_price}</div>
        </div>
        <div className="description">
            A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className="size">
            <h1 className='mt-[55px] text-[#656565] text-[20px] font-semibold'>Select Size</h1>
            <div className="sizes flex my-[30px] gap-[20px]">
             <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-[3px] cursor-pointer'>S</div>
             <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-[3px] cursor-pointer'>M</div>
             <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-[3px] cursor-pointer'>L</div>
             <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-[3px] cursor-pointer'>XL</div>
             <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-[3px] cursor-pointer'>XXL</div>
            </div>
            <button onClick={()=>addToCart(product.id)} className='w-[200px] px-[40px] py-[20px] font-semibold text-white bg-[#ff4141] border-none outline-none mb-[40px]'>ADD TO CART</button>
            <p className="category mt-[10px]">
                <span className='font-semibold'>category :</span> Women, T-Shirt, Crop Top
            </p>
            <p className="category mt-[10px]">
                <span className='font-semibold'>category :</span> Modern, Latest
            </p>
        </div>
    </div>
      
    </div>
  )
}

export default ProductDisplay
