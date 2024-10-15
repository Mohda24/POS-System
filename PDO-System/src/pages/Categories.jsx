import Category from "../components/PDO/category/Category";
import { useAppContext } from "../contexts";

export default function Categories() {

  // fetch categories from the context 
  const { categories } = useAppContext();
  console.log(categories);

  // loop on categories and map them to Category component 
  const categoriesList = 
  categories.payload.map((category) => {
    return <Category key={category.id} {...category} />;
  });

  // render the categories as a list of cards
  return <div className="flex flex-wrap gap-[15px]">{categoriesList}</div>;
}
