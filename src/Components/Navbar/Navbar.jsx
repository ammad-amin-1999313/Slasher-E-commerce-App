import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar flex justify-around p-[16px]">
      <div className="flex items-center gap-[16px]">
        <img src={logo} alt="" />
        <p className="text-[38px] text-[#171717] font-semibold">SHOPPER</p>
      </div>
      <ul className="flex gap-[50px] items-center text-[#626262] text-xl font-medium">
        <li
          onClick={() => setMenu("shop")}
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
        >
          {" "}
          <Link to="/">Shop</Link>{" "}
          {menu === "shop" ? (
            <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]" />
          ) : null}
        </li>
        <li
          onClick={() => setMenu("men")}
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
        >
          {" "}
          <Link to="/men">Men</Link>{" "}
          {menu === "men" ? (
            <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]" />
          ) : null}
        </li>
        <li
          onClick={() => setMenu("women")}
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
        >
          {" "}
          <Link to="/women">Women</Link>{" "}
          {menu === "women" ? (
            <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]" />
          ) : null}
        </li>
        <li
          onClick={() => setMenu("kids")}
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
        >
          {" "}
          <Link to="/kids">Kids</Link>{" "}
          {menu === "kids" ? (
            <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]" />
          ) : null}
        </li>
      </ul>
      <div className="flex items-center gap-[45px]">
        <Link to="/login">
          <button className="w-[157px] h-[58px] border-[1px] border-[#7a7a7a] rounded-[75px] text-[#515151] text-xl font-medium bg-white hover:bg-[#f3f3f3]">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="w-[22px] h-[22px] rounded-[11px] text-white bg-[red] flex items-center justify-center mt-[-35px] ml-[-55px] text-[14px]">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
