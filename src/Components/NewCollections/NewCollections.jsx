import React from 'react'
import "./NewCollections.css"
import new_collections from "../Assets/Assets/Frontend_Assets/new_collections"
import Item from '../Items/Item'

const NewCollections = () => {
  return (
    <div className='flex flex-1 flex-col items-center mt-[150px] gap-[10px] mb-[100px]'>
      <h1 className='uppercase text-[#171717] font-semibold text-[50px]'>New Collections</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className='mt-[50px] collections gap-[30px]'>
         {new_collections.map((collection,i) => (  <Item key={i} id={collection.id} name={collection.name} image={collection.image} new_price={collection.new_price} old_price={collection.old_price} /> ))}
      </div>
    </div>
  )
}

export default NewCollections
