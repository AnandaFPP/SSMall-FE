import React, { useEffect, useState } from "react";
import { MdStar } from "react-icons/md";
import axios from "axios";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/products`)
        .then((res) => setProducts(res.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error)
    }
  }, []);
  return (
    <>
      <div className="w-full pb-10">
        <div className="grid grid-cols-6 gap-5 max-w-[1240px] mx-auto">
            {products.map((product, index) => (
                <div className="flex flex-col justify-between bg-[white] overflow-hidden rounded-md shadow-md" key={index}>
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
        </div>
      </div>
    </>
  );
};

export default ProductCard;
