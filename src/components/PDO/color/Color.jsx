import { useState } from "react";

export default function Color({ colors }) {
    const [colorSlected , setColorSelected] = useState("")

  // loop through the colors if there are no colors
  const allColors =
    colors && colors.length > 0
      ? colors.map((color) => (
          <div
            key={color.id}
            onClick={() => setColorSelected(color.name)}
            className={` ${colorSlected == color.name && "ring ring-black" } flex items-center gap-[0.625rem] px-[0.51875rem] py-[0.2rem] bg-sizesAndColors rounded-[3.75rem] cursor-pointer`}
          >
            <span
              className="w-[1.125rem] h-[1.125rem] rounded-full shadow-lg"
              style={{ backgroundColor: color.colorCode }}
            ></span>
            <span className="text-[0.875rem]">{color.name}</span>
          </div>
        ))
      : "no color information";

  return (
    <div className="flex flex-col gap-[0.625rem]">
      <span className="font-bold">Couleur</span>
      <div className="colors flex flex-wrap gap-[0.625rem]">{allColors}</div>
    </div>
  );
}
