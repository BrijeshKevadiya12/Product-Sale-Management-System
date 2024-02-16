import React, { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../../api/springboot";

export const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${base_url}/products/allProducts`).then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <div className="items-center text-center text-3xl bg-blue-gray-900 text-white rounded-md m-4 p-4">
          All Products
        </div>
        <div className="flex flex-row ml-[20%]">
          <div className="m-2 gap-2 grid grid-cols-4">
            {products.map((post) => {
              const { productId ,title, mrp, currentPrice, inventory, discount } = post;
              return (
                <>
                  <div key={productId} className="border-2 border-black rounded-md p-2 shadow-lg shadow-blue-100">
                    <h1 className="font-bold text-2xl">{title}</h1>
                    <p>Product Id : {productId}</p>
                    <p>MRP : {mrp}</p>
                    <p>Current Price :{currentPrice}</p>
                    <p>Discount :{discount}%</p>
                    <p>Inventory :{inventory}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
