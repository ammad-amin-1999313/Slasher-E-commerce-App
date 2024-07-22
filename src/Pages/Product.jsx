import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopContext"
import { useParams } from 'react-router-dom'
import BreadCrum from '../Components/BreadCrums/BreadCrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
  const {productId} =useParams()
  const {all_product} = useContext(ShopContext)
  const product = all_product.find((product)=>product.id === Number(productId))
  
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
