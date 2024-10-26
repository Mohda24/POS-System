import { useAppContext } from "../../../contexts";
import Color from "../color/Color";
import Sizes from "../sizes/Sizes";
import { addProdctsToLocalStorage } from "../../../function/function";


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
    <div className="inline-block mb-3 w-full max-w-[440px] p-[1.5rem] bg-white rounded-[20px]">
      <div className="group card flex flex-col gap-[1.25rem] ">
        <div className="gap-[1rem] grid grid-cols-[5.625rem_1fr]">
          {/* image  */}
          <div
            id="imgProd"
            style={{
              width: "5.625rem",
              height: "5.625rem",
              borderRadius: "1rem",
            }}
            className="flex-grow-1 bg-tertiary"
          >
            <img
              src={"images/" + image}
              alt="title"
              className="w-full h-full rounded-[16px] object-cover scale-90 group-hover:scale-100 duration-300 ease-in group-hover:animate-flash"
            />
          </div>

          {/* title and price  */}
          <div className="flex flex-col gap-[.375rem]">
            <span className="text-[rgba(0,0,0,0.4)]">{categorie}</span>
            <h2 className="text-[1.125rem]">{productName}</h2>
            <span className="font-bold text-[24px]">{price}
              <span className="text-[.875rem] font-bold">  DH</span>
            </span>
          </div>
        </div>

        {/* conditional rendring if the sizes and colors are available we render them  */}
        {sizes && sizes.length > 0 ? <Sizes sizes={sizes} /> : ""}
        {colors && colors.length > 0 ? <Color colors={colors} /> : ""}

        {/* separetor */}
        <div className="bg-[#cccccc] w-full h-[.063rem]"></div>

        {/* action buttons  */}
        <button
          className="bg-primary text-white py-[.875rem] px-[1.25rem] font-bold rounded-[.75rem] select-none hover:opacity-70 duration-300 ease-in-out transition-opacity font-"
          onClick={() => addProduct()}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
