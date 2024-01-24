import React from "react";
import Product1 from "../../assets/img/product1.jpg";
import Product2 from "../../assets/img/product2.jpg";
import Product3 from "../../assets/img/product3.jpg";
import { MdStar, MdOutlineFiberNew } from "react-icons/md";

const NewCards = () => {
  return (
    <>
      <div className="w-full py-[2rem] px-20">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-24">
          <div className="w-full flex shadow-xl rounded-[10px] overflow-hidden">
            <div className="relative">
              <MdOutlineFiberNew size={35} className="absolute text-[#EC6D62]" />
              <img className="w-full" src={Product1} alt="Product" />
            </div>
            <div className="p-3">
              <h2 className="font-bold">Headphone Cable</h2>
              <p className="flex items-center gap-1">
                <MdStar size={20} className="text-[#F5C451]" /> 4.5/5
              </p>
              <h1 className="mt-[30px] font-semibold">$199</h1>
              <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="w-full flex shadow-2xl rounded-[10px] overflow-hidden">
            <div className="relative">
              <MdOutlineFiberNew size={35} className="absolute text-[#EC6D62]" />
              <img className="w-full" src={Product2} alt="Product" />
            </div>
            <div className="p-3">
              <h2 className="font-bold">Camera</h2>
              <p className="flex items-center gap-1">
                <MdStar size={20} className="text-[#F5C451]" /> 4.5/5
              </p>
              <h1 className="mt-[30px] font-semibold">$199</h1>
              <button className="my-1 w-[150px] bg-[#40BFFF] text-white font-semibold rounded-[5px] ">
                Add to cart
              </button>
            </div>
          </div>
          <div className="w-full flex shadow-2xl  rounded-[10px] overflow-hidden">
            <div className="relative">
              <MdOutlineFiberNew size={35} className="absolute text-[#EC6D62]" />
              <img className="w-full" src={Product3} alt="Product" />
            </div>
            <div className="p-3 w-auto">
              <h2 className="font-bold">Glasses</h2>
              <p className="flex items-center gap-1">
                <MdStar size={20} className="text-[#F5C451]" /> 4.5/5
              </p>
              <h1 className="mt-[30px] font-semibold">$199</h1>
              <button className="my-1 w-[150px] bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCards;
