import React, { useEffect } from "react";
import { useState } from "react";
import { useAppContext } from "../../../contexts";
import { removeProductFromLocalStorage } from "../../../function/function";
function ProductCart({ id, productName, productPrice, productImage }) {
  const [count, setCount] = useState(1);

  const { totale, setTotale , setProductsInCart } = useAppContext();

  const removeProduct = () =>{
    setTotale((totale - (productPrice * count).toFixed(2) * 1));
    setProductsInCart(removeProductFromLocalStorage(id))
    
  } 

  
  return (
    <div className="producCard flex flex-col gap-[20px]">
      <div className="productDetail flex gap-[20px]">
        <div className="productImage w-[70px] h-[70px] rounded-[16px]">
          <img
            src={`/images/${productImage}`}
            alt={productName}
            className="w-full h-full object-cover max-h-full max-w-full rounded-[16px] bg-yellow-50"
          />
        </div>
        <div className="productInfo flex flex-1 flex-col gap-[10px]">
          <div className="grid items-center grid-cols-[1fr_25px]">
            <h3 className="text-[18px] leading-[120%] font-[400]">
              {productName}
            </h3>
            <span
              className="icon-cross text-[25px] cursor-pointer bg-primary text-white rounded-[50%] flex items-center justify-center hover:opacity-70 duration-300 ease-in-out transition-opacity"
              onClick={() => removeProduct()}
            >
            </span>
          </div>
          <div className="price-detail flex justify-between items-center">
            <div className="counter flex gap-[6px] select-none">
              <button
                className="text-[14px] w-[24px] h-[24px] p-[8px] bg-primary rounded-[6px] font-[400] text-white flex items-center justify-center"
                onClick={() => {
                  setTotale((prev) =>
                    count > 1 ? (prev - productPrice).toFixed(2) * 1 : prev
                  );
                  setCount(count === 1 ? count : count - 1);
                }}
              >
                -
              </button>
              <span className="text-[16px] font-[400]">{count}</span>
              <button
                className="text-[14px] w-[24px] h-[24px] p-[8px] bg-primary rounded-[6px] font-[400] text-white flex items-center justify-center"
                onClick={() => {
                  setTotale((prev) => (prev + productPrice).toFixed(2) * 1);
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="price text-[16px] leading-[100%]">
              {(productPrice * count).toFixed(2)}
              <span className="ms-[5px] text-[10px]">DH</span>
            </div>
          </div>
        </div>
      </div>
      <div className="seperator h-[1px] w-full bg-[rgba(0,0,0,0.30)]" />
    </div>
  );
}

export default ProductCart;
