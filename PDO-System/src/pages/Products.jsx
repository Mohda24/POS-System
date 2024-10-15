import Product from "../components/PDO/product/Product";
import { useAppContext } from "../contexts";
export default function Products() {

  // Get the products from the AppContext
  const { products } = useAppContext();

 // loop on each product and add it to the Product component and send product information as props
  const ProductsList =
    products && products.length > 0
      ? products.map((product) =>{ 
      return <Product key={product.id} {...product} />
    }
    )
      : "no products available";


      
  return (
    <div className="cards flex items-center flex-wrap gap-[1.875rem]">
      {/* Render the products as a list of cards */}
      {ProductsList}
    </div>
  );
}
