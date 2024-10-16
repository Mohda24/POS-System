import { useAppContext } from "../../../contexts";
import Color from "../color/Color";
import Sizes from "../sizes/Sizes";
import { addProdctsToLocalStorage } from "../../../function/function";
import { useState } from "react";

export default function Product({ id,productName, price, image, sizes, colors }) {
  const {setProductsInCart,productsInCart , setfeedBackMessage , feedBackMessage} = useAppContext();
  const addProduct=()=>{
    if(productsInCart.length>0 && productsInCart.find(product=>product.productName===productName))return;
    const product={
      id,
      productName,
      price,
      image:image
    }
    addProdctsToLocalStorage([product,...productsInCart]);
    setProductsInCart([product,...productsInCart]);

    setfeedBackMessage(true);
    setTimeout(() => {
      setfeedBackMessage(false);
    },1000)

  }

  return (
    <div className="card flex flex-col gap-[1.25rem] w-[22.1875rem] p-[1.5rem] bg-white rounded-[1.25rem]">
      <div className="grid grid-cols-[6.875rem_1fr] gap-[1.25rem]">
      {/* image  */}
        <div style={{ width: "6.875rem", height: "6.25rem", borderRadius: "1rem" }} className="flex-grow-1" >
          <img src={"images/" + image} alt="title" className="w-full h-full rounded-[1rem] object-cover" />
        </div>

        {/* title and price  */}
        <div className="flex flex-col gap-[0.625rem]">
          <h2 className="text-[1.25rem]">{productName}</h2>
          <span className="font-bold text-[1.5rem]">{price} DH</span>
        </div>
      </div>

      {/* conditional rendring if the sizes and colors are available we render them  */}
      {sizes && sizes.length > 0 ? <Sizes sizes={sizes} /> : ""}
      {colors && colors.length > 0 ? <Color colors={colors} /> : ""}

      {/* separetor */}
      <div className="bg-[#cccccc] w-full h-[0.063rem]"></div>

      {/* action buttons  */}
      <button className="bg-primary text-white py-[0.4375rem] px-[2.796875rem] rounded-[0.75rem] select-none hover:opacity-70 duration-300 ease-in-out transition-opacity"
      onClick={()=>addProduct()}>
        Ajouter au panier
      </button>
   </div>
  );
}