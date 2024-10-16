
import "./styles/global/style.css";
import LeftSideBar from "./components/PDO/Aside/LeftSideBar";
import Product from "./components/PDO/product/Product";
import products from "../public/data/products.json";
import Products from "./pages/Products";

import { useCallback, useEffect, useState } from "react";
import { AppContextProvider } from "./contexts";
import Category from "./components/PDO/category/Category";
import ProductSkeleton from "./components/PDO/Skeleton Loading/ProductSkeleton";
import SkeletonCounted from "./components/PDO/Skeleton Counted/SkeletonCounted";
import Panel from "./components/PDO/Panel/Panel";

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
  const[filter, setFilter] = useState("all");


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
      console.log(data);
      
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

    <>
    <AppContextProvider value={{ products,setProducts, categories,filter,setFilter}}>

  
    <LeftSideBar/>
    <main className='w-[calc(100%-28.75rem)] ms-[6.875rem] px-[2.5rem] py-[1.875rem]'>
    <Category/>
    <Products/>
    </main>
    <Panel/>
    </AppContextProvider>
    
    
    
    </>
  
  
  
  
  
  
  )}


export default App;
