import Product from "../components/PDO/product/Product";
import { useAppContext } from "../contexts";
import SkeletonCounted from "../components/PDO/Skeleton Counted/SkeletonCounted";
import ProductSkeleton from "../components/PDO/Skeleton Loading/ProductSkeleton";
export default function Products() {

  // Get the products from the AppContext
  const { products } = useAppContext();

  
 // loop on each product and add it to the Product component and send product information as props
  const ProductsList = products.payload.map((product) =>{ 
      return <Product key={product.id} {...product} />
    }
    )
      
      
  return (
    <div className="cards 4xl:columns-4 2xl:columns-3 xl:columns-2 lg:columns-1">
      {/* Render the products as a list of cards */}
      {products.loading === "pending" ?  <SkeletonCounted Skeleton={ProductSkeleton} count={5} />
      : ProductsList}
    </div>
  );
}
