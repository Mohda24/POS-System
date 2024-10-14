import Color from "../color/Color";
import Sizes from "../sizes/Sizes";

export default function Product() {
  const sizes = [
    { id: 1, name: "S" },
    { id: 2, name: "MD" },
    { id: 3, name: "XL" },
    { id: 4, name: "L" },
    { id: 5, name: "L" },
  ];

  const colors = [
    { id: 1, name: "black", colorCode: "#000" },
    { id: 1, name: "blanc", colorCode: "#fff" },
    { id: 4, name: "green", colorCode: "#4CAF50" },
    { id: 5, name: "Bleu foncé", colorCode: "#0D0072" },
    { id: 7, name: "Marron", colorCode: "#965E47" },
  ];

  return (
    <div className="card flex flex-col gap-[1.25rem] w-[22.1875rem] p-[1.5rem] bg-white rounded-[1.25rem]">
      <div className="flex items-center justify-between gap-[1.25rem]">
        {/* image  */}
        <div
          style={{ width: "6.875rem", height: "6.25rem", borderRadius: "1rem" }}
          className="flex-grow-1"
        >
          <img
            src="/src/assets/imgs/produc1.jpg"
            alt="title"
            className="w-full h-full rounded-[1rem]"
          />
        </div>
        {/* title and price  */}
        <div className="flex flex-col gap-[0.625rem]">
          <h2 className="text-[1.25rem]">Pantalon en Jean Léger</h2>
          <span className="font-bold text-[1.5rem]">359.00 DH</span>
        </div>
      </div>
      
      {/* sizes and colors  */}
      <Sizes sizes={sizes} />
      <Color colors={colors} />

      {/* action buttons  */}
      <div className="bg-sizes w-full h-[0.09375rem]"></div>
      <button className="bg-primary text-white py-[0.4375rem] px-[2.796875rem] rounded-[0.75rem]">
        Ajouter au panier
      </button>
    </div>
  );
}
