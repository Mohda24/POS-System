import React, { useEffect } from "react";
import { useState } from "react";
import { useAppContext } from "../../../contexts";
import { removeProductFromLocalStorage,manageCountOfProduct } from "../../../function/function";
function ProductCart({ id, productName, productPrice, productImage, productCount }) {
  const [count, setCount] = useState(productCount);

  const { totale, setTotale, setProductsInCart } = useAppContext();

  const removeProduct = () => {
    
    setTotale((prev) => prev - productPrice * count);
    setProductsInCart(removeProductFromLocalStorage(id));
  };
  const handleDecrement = () => {
    if (count > 1) {
      setProductsInCart(manageCountOfProduct(id, "decrement"));
      setCount(count - 1);
      setTotale((prev) => prev - productPrice);
    }
  };
  const handleIncrement = () => {
    setProductsInCart(manageCountOfProduct(id, "increment"));
    setCount(count + 1);
    setTotale((prev) => prev + productPrice);
  };


  return (
    <div className="producCard flex flex-col gap-[1.25rem]">
      <div className="productDetail flex gap-[1.25rem]">
        <div className="productImage w-[4.375rem] h-[4.375rem] rounded-[1rem]">
          <img
            src={`/images/${productImage}`}
            alt={productName}
            className="w-full h-full object-cover max-h-full max-w-full rounded-[1rem] bg-yellow-50"
          />
        </div>
        <div className="productInfo flex flex-1 flex-col gap-[.625rem]">
          <div className="flex">
            <h3 className="text-[1.125rem] leading-[120%] font-[400] flex-1">
              {productName}
            </h3>
            <button
              className="ml-4 text-gray-400 hover:text-gray-700 focus:outline-none"
              onClick={() => removeProduct()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="price-detail flex justify-between items-center">
            <div className="counter flex gap-[.375rem] select-none">
              <button
                className="text-[.875rem] w-[1.5rem] h-[1.5rem] p-[.5rem] bg-primary rounded-[.375rem] font-[400] text-white flex items-center justify-center"
                onClick={() => handleDecrement()}
              >
                -
              </button>
              <span className="text-[1rem] font-[400]">{count}</span>
              <button
                className="text-[.875rem] w-[1.5rem] h-[1.5rem] p-[.5rem] bg-primary rounded-[.375rem] font-[400] text-white flex items-center justify-center"
                onClick={() => handleIncrement()}
              >
                +
              </button>
            </div>
            <div className="price text-[1rem] leading-[100%]">
              {(productPrice * count).toFixed(2)}
              <span className="ms-[.3125rem] text-[.625rem]">DH</span>
            </div>
          </div>
        </div>
      </div>
      <div className="seperator h-[.0625rem] w-full bg-[rgba(0,0,0,0.30)]" />
    </div>
  );
}

export default ProductCart;
