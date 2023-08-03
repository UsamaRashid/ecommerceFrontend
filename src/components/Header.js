import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

import Logo from "../img/logo.svg";
const Header = () => {
  const { isOpen, setisOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all xl:px-10`}
    >
      {/* logo  */}
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={"/"}>
          <div>
            <img className='w-[40px]' src={Logo} alt='logo' />
          </div>
        </Link>
        {/* cart  */}
        <div
          onClick={() => setisOpen(!isOpen)}
          className='cursor-pointer flex relative'
        >
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
