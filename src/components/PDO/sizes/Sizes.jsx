export default function Sizes({ sizes }) {
  
    // loop through the sizes if there are no size
  const allSizes =
    sizes && sizes.length > 0
      ? sizes.map((size) => (
          <span
            key={size.id}
            className="text-[0.875rem] px-[0.51875rem] py-[0.2rem] bg-sizesAndColors rounded-[3.75rem] cursor-pointer"
          >
            {size.name}
          </span>
        ))
      : "no size information";


  return (
    <div className="flex flex-col gap-[0.625rem]">
      <span className="font-bold">Taille</span>
      <div className="sizes flex gap-[0.625rem]">{allSizes}</div>
    </div>
  );
}
