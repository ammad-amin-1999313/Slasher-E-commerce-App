import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isOpen, setOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar  relative sm:py-[10px]  sm:px-[0px] md:py-[12px] md:px-[30px] lg:py-[20px]  lg:px-[50px] flex justify-between md:justify-around p-[16px]">
      <div className="flex items-center gap-[16px]">
        <img className="w-[40px]" src={logo} alt="" />
        <p className="text-[25px] text-[#171717] uppercase font-semibold">
          SLASHER
        </p>
      </div>
      {/* -------Desktop------------- */}
      <ul className="h-[80px] hidden md:flex md:gap-[25px] md:text-[14px]  lg:text-[18px] gap-[30px] items-center text-[#626262] text-lg font-medium">
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
      {/* ----------Desktop------------- */}
      <div className="hidden md:flex items-center gap-[30px]">
        <Link to="/login">
          <button className=" md:w-[80px] md:h-[35px] lg:w-[120px] lg:h-[45px] border-[1px] border-[#7a7a7a] rounded-[75px] text-[#515151] text-lg font-medium bg-white hover:bg-[#f3f3f3]">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img className="md:w-[30px] lg:w-full" src={cart_icon} alt="" />
        </Link>
        <div className="md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] rounded-[11px] text-white bg-[red] flex items-center justify-center mt-[-35px] ml-[-45px] text-[14px]">
          {getTotalCartItems()}
        </div>
      </div>
      {/* -----------Mobile-------- */}
      <div className=" md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div style={{height:"100vh",zIndex:"90",overflowY:"scroll"}} className="fixed top-0 left-0 right-0 bottom-0  bg-gray-700 md:hidden w-full  h-[100vh] ">
          <div className="flex items-center pt-4 px-4 justify-between">
            <div className="flex items-center  gap-[16px]">
              <img className="w-[40px]" src={logo} alt="" />
              <p className="text-[25px] text-[#171717] uppercase font-semibold">
                SLASHER
              </p>
            </div>

            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          {/* ----------- */}
          <div className="pt-6 ">
            <ul className="  sm:absolute sm:bg-white  flex flex-col md:gap-[25px]   md:text-[18px] gap-[30px] items-center text-black text-lg font-medium">
              <li
                onClick={() => setMenu("shop")}
                className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
              >
                {" "}
                <Link onClick={()=>setOpen(false)} to="/">Shop</Link>{" "}
                {menu === "shop" ? (
                  <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]" />
                ) : null}
              </li>
              <li
                onClick={() => setMenu("men")}
                className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
              >
                {" "}
                <Link onClick={()=>setOpen(false)} to="/men">Men</Link>{" "}
                {menu === "men" ? (
                  <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]" />
                ) : null}
              </li>
              <li
                onClick={() => setMenu("women")}
                className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
              >
                {" "}
                <Link onClick={()=>setOpen(false)} to="/women">Women</Link>{" "}
                {menu === "women" ? (
                  <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]" />
                ) : null}
              </li>
              <li
                onClick={() => setMenu("kids")}
                className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
              >
                {" "}
                <Link onClick={()=>setOpen(false)} to="/kids">Kids</Link>{" "}
                {menu === "kids" ? (
                  <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]" />
                ) : null}
              </li>
            </ul>
            {/*-----------  */}
            <Link className="flex justify-center mt-[30px]" onClick={()=>setOpen(false)} to="/cart">
              <img className="w-[30px] lg:w-full" src={cart_icon} alt="" />
            </Link>
            <div className="flex justify-center mt-[-40px] ml-[25px]">
              <div className="w-[18px]  rounded-[11px] text-white bg-[red] flex items-center justify-center  text-[14px]">
                {getTotalCartItems()}
              </div>
            </div>
            <Link className="flex justify-center mt-[60px]" onClick={()=>setOpen(false)} to="/login">
              <button className=" w-[150px] flex  justify-center border-[1px] border-[#7a7a7a] rounded-lg text-[#515151] text-lg font-medium bg-white hover:bg-[#f3f3f3]">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
