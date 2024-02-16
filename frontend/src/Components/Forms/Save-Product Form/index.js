import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import base_url from "../../../api/springboot";
import axios from "axios";

export const SaveproductForm = () => {

  const [product,setProduct] = useState([]);

  const handleForm = (e) => {
    postDataServer(product);
    e.preventDefault();
  }

  const postDataServer = (data) => {
    axios.post(`${base_url}/products/saveproductsingle`, data)
    .then((response) => {
      toast("Product Saved");
    })
    .catch((error) => {
      toast("Error Occured");
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleForm}>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Product Title :
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="product-title"
              type="text"
              onChange={(e) =>{
                setProduct({...product,title:e.target.value})
              }}
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="mrp">
              MRP :
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mrp"
              type="text"
              onChange={(e) =>{
                setProduct({...product,mrp:e.target.value})
              }}
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="mrp">
              Current Price :
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="currentprice"
              type="text"
              onChange={(e) =>{
                setProduct({...product,currentPrice:e.target.value})
              }}
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="mrp">
              Inventory :
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="currentprice"
              type="text"
              onChange={(e) =>{
                setProduct({...product,inventory:e.target.value})
              }}
            />
          </div>

          <div class="flex items-center justify-center">
            <button
              class="bg-blue-gray-900 w-full hover:bg-blue-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleForm}
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SaveproductForm;
