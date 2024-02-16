/* eslint-disable no-lone-blocks */
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import base_url from "../../../api/springboot";
import { ToastContainer, toast } from "react-toastify";

export function FIndProductForm() {
  const [productid, setProductid] = useState([]);
  const [product, setProduct] = useState([]);
  const [isproduct, setIsproduct] = useState(false);

  const deleteProduct = () => {
    const pid = productid["productid"];
    axios
      .put(`${base_url}/products/removeproduct?productid=${pid}`)
      .then((response) => {
        toast.warning("Product removed successfully");
        setIsproduct(false);
        setProduct(null);
      })
      .catch((error) => {
        toast.error("Product Not Removed");
      });
  };

  const getDetails = () => {
    const pid = productid["productid"];
    axios
      .get(`${base_url}/products/getProductDetails`, {
        params: {
          productid: pid,
        },
      })
      .then((response) => {
        setProduct(response.data);
        {
          response.data === null ? setIsproduct(false) : setIsproduct(true);
        }
        {
          response.data === null
            ? toast.error("Product Not Found")
            : toast.success("Product Found");
        }
      })
      .catch((err) => {
        setProduct(null);
        toast.error("Error Occured or No Product Found");
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
      <Card color="transparent" className="" shadow={false}>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Product Id :
            </Typography>
            <Input
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setProductid({ ...productid, productid: e.target.value });
              }}
            />
            <Button
              className="mt-2 bg-blue-gray-900"
              fullWidth
              onClick={getDetails}
            >
              Get Product Details
            </Button>
          </div>
        </form>
      </Card>
      {isproduct == false ? (
        <div></div>
      ) : (
        <div className="flex flex-row ml-[15%]">
          <div className="m-2 gap-2 grid grid-cols-4">
            <div
              key={product.productId}
              className="border-2 border-black rounded-md p-2 shadow-lg shadow-blue-100"
            >
              <h1 className="font-bold text-2xl">{product.title}</h1>
              <p>Product Id : {product.productId}</p>
              <p>MRP : {product.mrp}</p>
              <p>Current Price :{product.currentPrice}</p>
              <p>Discount :{product.discount}%</p>
              <p>Inventory :{product.inventory}</p>
              <div>
                <button
                  className="bg-red-300 text-black rounded-md p-1 mt-2 border-2 border-black justify-center ml-2"
                  onClick={deleteProduct}
                >
                  Delete Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FIndProductForm;
