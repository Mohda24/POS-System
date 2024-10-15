import Product from "../components/PDO/product/Product";

export default function Products() {
  return (
    <div className="cards flex items-center flex-wrap gap-[1.875rem]">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  )
}
