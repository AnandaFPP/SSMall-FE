import React, { useEffect, useState } from "react";
import { MdStar } from "react-icons/md";
import Product5 from "../../assets/img/product5.png";
import Product6 from "../../assets/img/product6.png";
import Product7 from "../../assets/img/product7.png";
import Product8 from "../../assets/img/product8.png";
import Product9 from "../../assets/img/product9.png";
import Product10 from "../../assets/img/product10.png";
import Product11 from "../../assets/img/product11.png";
import Product12 from "../../assets/img/product12.png";
import Product13 from "../../assets/img/product13.png";
import Product14 from "../../assets/img/product14.png";
import Product15 from "../../assets/img/product15.png";
import axios from "axios";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products`)
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="w-full pb-10">
        <div className="grid grid-cols-6 gap-5 max-w-[1240px] mx-auto">
            {products.map((product) => (
                <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md">
                    <img src={product.product_image} alt="Product" className="w-full" />
                    <div className="p-2">
                    <h1 className="font-bold">{product.product_name}</h1>
                    <span className="flex items-center text-sm text-gray-500">
                        <MdStar size={24} className="text-[#F5C451]" />
                        4.5/5
                    </span>
                    </div>
                    <div className="p-2">
                    <h2 className="font-semibold">$ {product.product_price}</h2>
                    <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                        Add to cart
                    </button>
                    </div>
                </div>
            ))}
          <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md">
            <img src={Product5} alt="Product" className="w-full" />
            <div className="p-2">
              <h1 className="font-bold">Watch</h1>
              <span className="flex items-center text-sm text-gray-500">
                <MdStar size={24} className="text-[#F5C451]" />
                4.5/5
              </span>
            </div>
            <div className="p-2 ">
              <h2 className="font-semibold">$199</h2>
              <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md">
            <img src={Product6} alt="Product" className="w-full" />
            <div className="p-2">
              <h1 className="font-bold">High Heels</h1>
              <span className="flex items-center text-sm text-gray-500">
                <MdStar size={24} className="text-[#F5C451]" />
                4.5/5
              </span>
            </div>
            <div className="p-2">
              <h2 className="font-semibold">$199</h2>
              <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md">
            <img src={Product7} alt="Product" className="w-full" />
            <div className="p-2">
              <h1 className="font-bold">Smartwatch</h1>
              <span className="flex items-center text-sm text-gray-500">
                <MdStar size={24} className="text-[#F5C451]" />
                4.5/5
              </span>
            </div>
            <div className="p-2">
              <h2 className="font-semibold">$199</h2>
              <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md">
            <img src={Product8} alt="Product" className="w-full" />
            <div className="p-2">
              <h1 className="font-bold">Shoes Casual</h1>
              <span className="flex items-center text-sm text-gray-500">
                <MdStar size={24} className="text-[#F5C451]" />
                4.5/5
              </span>
            </div>
            <div className="p-2">
              <h2 className="font-semibold">$199</h2>
              <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md">
            <img src={Product9} alt="Product" className="w-full" />
            <div className="p-2">
              <h1 className="font-bold">Hair Toner</h1>
              <span className="flex items-center text-sm text-gray-500">
                <MdStar size={24} className="text-[#F5C451]" />
                4.5/5
              </span>
            </div>
            <div className="p-2">
              <h2 className="font-semibold">$199</h2>
              <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md">
            <img src={Product10} alt="Product" className="w-full" />
            <div className="p-2">
              <h1 className="font-bold">Gamepad</h1>
              <span className="flex items-center text-sm text-gray-500">
                <MdStar size={24} className="text-[#F5C451]" />
                4.5/5
              </span>
            </div>
            <div className="p-2">
              <h2 className="font-semibold">$199</h2>
              <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md">
            <img src={Product11} alt="Product" className="w-full" />
            <div className="p-2">
              <h1 className="font-bold">Bag</h1>
              <span className="flex items-center text-sm text-gray-500">
                <MdStar size={24} className="text-[#F5C451]" />
                4.5/5
              </span>
            </div>
            <div className="p-2">
              <h2 className="font-semibold">$199</h2>
              <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md">
            <img src={Product12} alt="Product" className="w-full" />
            <div className="p-2">
              <h1 className="font-bold">Mouse Wireless</h1>
              <span className="flex items-center text-sm text-gray-500">
                <MdStar size={24} className="text-[#F5C451]" />
                4.5/5
              </span>
            </div>
            <div className="p-2">
              <h2 className="font-semibold">$199</h2>
              <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md">
            <img src={Product13} alt="Product" className="w-full" />
            <div className="p-2">
              <h1 className="font-bold">Earphone</h1>
              <span className="flex items-center text-sm text-gray-500">
                <MdStar size={24} className="text-[#F5C451]" />
                4.5/5
              </span>
            </div>
            <div className="p-2">
              <h2 className="font-semibold">$199</h2>
              <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md">
            <img src={Product14} alt="Product" className="w-full" />
            <div className="p-2">
              <h1 className="font-bold">Lighter</h1>
              <span className="flex items-center text-sm text-gray-500">
                <MdStar size={24} className="text-[#F5C451]" />
                4.5/5
              </span>
            </div>
            <div className="p-2">
              <h2 className="font-semibold">$199</h2>
              <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md">
            <img src={Product15} alt="Product" className="w-full" />
            <div className="p-2">
              <h1 className="font-bold">Cosmetic</h1>
              <span className="flex items-center text-sm text-gray-500">
                <MdStar size={24} className="text-[#F5C451]" />
                4.5/5
              </span>
            </div>
            <div className="p-2">
              <h2 className="font-semibold">$199</h2>
              <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md">
            <img src={Product15} alt="Product" className="w-full" />
            <div className="p-2">
              <h1 className="font-bold">Cosmetic</h1>
              <span className="flex items-center text-sm text-gray-500">
                <MdStar size={24} className="text-[#F5C451]" />
                4.5/5
              </span>
            </div>
            <div className="p-2">
              <h2 className="font-semibold">$199</h2>
              <button className="my-1 w-full bg-[#40BFFF] text-white font-semibold rounded-[5px]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
