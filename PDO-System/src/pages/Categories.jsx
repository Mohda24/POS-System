import Category from "../components/PDO/category/Category";

export default function Categories() {
  const categories = [
    {
        id: 0,
      title: "Tous",
    },
    {
      id: 1,
      title: "Pants",
    },
    {
      id: 2,
      title: "Prfum",
    },
    {
      id: 3,
      title: "T-shirt",
    },
    {
      id: 4,
      title: "Shoes",
    },
    {
      id: 5,
      title: "Accessories",
    },

  ];

  // render the categories as a list of cards
  return (
    <div className="flex flex-wrap gap-[15px]">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );

}
