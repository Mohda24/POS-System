import { useAppContext } from "../../../contexts";
import Color from "../color/Color";
import Sizes from "../sizes/Sizes";
import { addProdctsToLocalStorage } from "../../../function/function";
import { useCallback, useMemo } from "react";

export default function Product({
  id,
  productName,
  price,
  image,
  sizes,
  colors,
  categorie
}) {
  const {
    setProductsInCart,
    productsInCart,
    feedBackMessage,
    setFeedBackMessage,
  } = useAppContext();
  const addProduct = () => {
    if (
      productsInCart.length > 0 &&
      productsInCart.find((product) => product.id === id)
    )
      return;
    const product = {
      id,
      productName,
      price,
      image: image,
      count: 1,
    };
    addProdctsToLocalStorage([product, ...productsInCart]);
    setProductsInCart([product, ...productsInCart]);

    setFeedBackMessage((prev) => ({ ...prev, show: "start", payload: product }));
    setTimeout(() => {
      setFeedBackMessage((prev) => ({
        ...prev,
        show: "end",
      }));
    }, 4000);

    console.log(feedBackMessage);
  };

  return (
    <div className="inline-block mb-3 w-[294px] p-[1.5rem] bg-white rounded-[1.25rem]">
      <div className="group card flex flex-col gap-[1.25rem] ">
        <div className="gap-[16px] grid grid-cols-[90px_1fr]">
          {/* image  */}
          <div
            id="imgProd"
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "1rem",
            }}
            className="flex-grow-1 bg-tertiary"
          >
            <img
              src={"images/" + image}
              alt="title"
              className="w-full h-full rounded-[1rem] object-cover scale-90 group-hover:scale-100 duration-300 ease-in group-hover:animate-flash"
            />
          </div>

          {/* title and price  */}
          <div className="flex flex-col gap-[6px]">
            <span className="text-[rgba(0,0,0,0.4)]">{categorie}</span>
            <h2 className="text-[18px]">{productName}</h2>
            <span className="font-bold text-[1.5rem]">{price}
              <span className="text-[14px] font-bold">  DH</span>
            </span>
          </div>
        </div>

        {/* conditional rendring if the sizes and colors are available we render them  */}
        {sizes && sizes.length > 0 ? <Sizes sizes={sizes} /> : ""}
        {colors && colors.length > 0 ? <Color colors={colors} /> : ""}

        {/* separetor */}
        <div className="bg-[#cccccc] w-full h-[0.063rem]"></div>

        {/* action buttons  */}
        <button
          className="bg-primary text-white py-[14px] px-[20px] font-bold rounded-[0.75rem] select-none hover:opacity-70 duration-300 ease-in-out transition-opacity font-"
          onClick={() => addProduct()}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
