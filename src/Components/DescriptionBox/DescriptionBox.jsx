import React from "react";

const DescriptionBox = () => {
  return (
    <div className="my-[120px] mx-[130px]">
      <div className="navigator flex">
        <div className="nav flex items-center justify-center font-semibold w-[171px] h-[70px] border-[1px] border-[#d0d0d0]">Description</div>
        <div className="nav flex items-center justify-center font-semibold w-[171px] h-[70px] border-[1px] border-[#d0d0d0]bg-[#fbfbfb] text-[#555]">Reviews (122)</div>
      </div>
      <div className="text flex flex-col gap-[25px] border-[1px] border-[#D0D0D0] p-[48px] pb-[70px]">
        <p>
          An e-commerce website is an online platform that facilitates the bying
          and selling of products or services over the internet. It serves as a
          virtual marketplace where business and individuals can showcase their
          products, interact with coustomers and conduct transitions without the
          need of physical presence. E-commerce websites have gained immense
          popularity due to their convenience, accessibility, and the global
          reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices and any available variations
          (etc, sizes, colors). Each product usually have its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
