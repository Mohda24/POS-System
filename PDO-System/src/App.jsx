import Products from "./pages/Products";
import "./styles/global/style.css";

import products from "../public/data/products.json";
import Categories from "./pages/Categories";
import { useCallback, useEffect, useState } from "react";
import { AppContextProvider } from "./contexts";

function App() {
  
  const [products, setProducts] = useState({
    payload: [],
    loading: "pending",
    error: null,
  });
  const [categories, setCategories] = useState({
    payload: [],
    loading: "pending",
    error: null,
  });

  // fetch products from products.json and add them to state
  const getAllProducts = async () => {
    try {
      setProducts((prev) => ({ ...prev, loading: "pending", error: null }));
      const response = await fetch("./public/data/products.json");
      const data = await response.json();
      return setProducts((prev) => ({
        ...prev,
        payload: data.products,
        loading: "fullfilled",
        error: null,
      }));
    } catch (error) {
      return setProducts((prev) => ({
        ...prev,
        loading: "rejected",
        error: error,
      }));
    }
  };

  // fetch categories from products.json and add them to state

  const getAllCategories = async () => {
    try {

      setCategories((prev) => ({ ...prev, loading: "pending", error: null }));

      const response = await fetch("./public/data/products.json");
      const data = await response.json();
      return setCategories((prev) => ({
        ...prev,
        payload: data.categories,
        loading: "fullfilled",
        error: null,
      }));

    } catch (error) {
      return setCategories((prev) => ({
        ...prev,
        loading: "rejected",
        error: error,
      }));
    }
  };

  // fetch products and categories on component mount
  useEffect(() => {
    getAllCategories();
    getAllProducts();
  }, []);

  return (
    <div>
      {/* Sidebar */}
      <section className="sidebar bg-white w-[6.875rem] h-[100vh] fixed"></section>

      {/* Main */}
      <AppContextProvider value={{ products, categories }}>
        <main className="flex flex-col gap-[1.313rem] w-[calc(100%-6.875rem)] h-[100vh] px-[2.5rem] py-[1.875rem] relative left-[6.875rem] bg-secondary">
          <h2 className="text-title font-bold">Catégories</h2>
          <Categories />
          <h2 className="text-title font-bold">Liste des Pantalons</h2>
          <Products />
        </main>
      </AppContextProvider>
    </div>
  );
}

export default App;
