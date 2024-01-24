import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import Profile from "../../assets/img/profile.png";
import Product1 from "../../assets/img/product1.jpg";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import ModalCheckout from "../modals/ModalCheckout";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [cart, setCart] = useState(true);
  const [history, setHistory] = useState(true);
  const [checkout, setCheckout] = useState(false)

  const handleOnClose = () => setCheckout(false)

  const handleCart = () => {
    setCart(!cart)
  }
  const handleHistory = () => {
    setHistory(!history)
  }

  return (
    <>
    <nav>
      <div className="flex justify-between items-center h-24 px-24 bg-[#40BFFF] text-white">
          <img src={Logo} alt="logo" />
          <ul className="flex items-center">
            <li className="p-4">Home</li>
            <li className="p-4">Products</li>
            <li className="p-4">About</li>
            <li className="p-4">Pricing</li>
            <li className="p-4">
              <IoIosSearch size={40}/>
            </li>
            <li className="p-4 hover:text-[#eaeaea] hover:cursor-pointer">
              <div onClick={handleCart}>
                <IoCartOutline size={40}/>
              </div>
            </li>
            <li className="p-4 hover:cursor-pointer hover:transform hover:scale-105">
              <div onClick={handleHistory}>
                <img src={Profile} alt="Profile" />
              </div>
            </li>
          </ul>
      </div>
      <div className={!cart ? 'fixed right-0 top-0 z-[1] w-[30%] h-full border-l border-l-gray-900 bg-[#eaeaea] ease-in-out duration-500' : 'fixed right-[-100%] ease-in-out duration-500'}>
        <div className="flex items-center justify-between px-2">
          <h1 className="text-2xl font-semibold p-4">My Cart</h1>
          <AiOutlineClose size={30} onClick={handleCart} className="hover:cursor-pointer"/>
        </div>
        <div className="bg-[aqua] text-center">
          Get your free shipping voucher!
        </div>
        <div className="flex">
          <div>
            <img src={Product1} alt="Product" className="w-40"/>
          </div>
          <div className="flex flex-col w-full justify-between">
            <div className="flex justify-between gap-10 py-2 px-4 font-semibold">
              <h1>Headphone Cable</h1>
              <BsTrash3 size={20} className="hover:cursor-pointer text-red-500"/>
            </div>
            <div>
              <p className="pl-4 text-2xl font-semibold">$199</p>
              <button onClick={() => setCheckout(true)} className="w-full bg-[#EC6D62] text-white font-semibold py-1">Checkout</button>
              <ModalCheckout visible={checkout} onClose={handleOnClose}/>
            </div>
          </div>
        </div>
      </div>
      <div className={!history ? 'fixed right-0 top-0 z-[1] w-[30%] h-full border-l border-l-gray-900 bg-[#eaeaea] ease-in-out duration-500' : 'fixed right-[-100%] ease-in-out duration-500'}>
        <div className="flex items-center justify-between px-2">
          <h1 className="text-2xl font-semibold p-4">My History</h1>
          <AiOutlineClose size={30} onClick={handleHistory} className="hover:cursor-pointer"/>
        </div>
        <div className="bg-[aqua] text-center">
          Get your free shipping voucher!
        </div>
        <div className="flex">
          <div>
            <img src={Product1} alt="Product" className="w-40"/>
          </div>
          <div className="flex flex-col w-full justify-between">
            <div className="flex justify-between gap-10 py-2 px-4 font-semibold">
              <h1>Headphone Cable</h1>
            </div>
            <div>
              <p className="pl-4 text-2xl font-semibold">$199</p>
              <button onClick={() => setCheckout(true)} className="w-full bg-[#61C454] text-white font-semibold py-1">Buy Again</button>
              <ModalCheckout visible={checkout} onClose={handleOnClose}/>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
