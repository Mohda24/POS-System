import Products from './pages/Products'
import "./styles/global/style.css"

import products from '../public/data/products.json'
import Categories from './pages/Categories';
import { useCallback, useEffect, useState } from 'react';
import { AppContextProvider } from './contexts';

function App() {
  const [products , setProducts] = useState([])
  const [categories , setCategories] = useState([])

  // fetch products from products.json and add them to state
  const getAllProducts = async () =>{
    try{
      const response = await fetch("./public/data/products.json");
      const data = await response.json();
      return setProducts(data.products)

    } catch(error) {
        return error
    }
  }


  // fetch categories from products.json and add them to state

  const getAllCategories= async () =>{
    try{
      const response = await fetch("./public/data/products.json");
      const data = await response.json();
      return setCategories(data.categories)

    } catch(error) {
        return error
    }
  } 
  
  // fetch products and categories on component mount
  useEffect(() =>{
    getAllCategories()
    getAllProducts()
  } , [])

  return (
    <div >
      {/* Sidebar */}
      <section className='sidebar bg-white w-[6.875rem] h-[100vh] fixed'></section>

      {/* Main */}
      <AppContextProvider  value={{products , categories}}>

      
      <main className='flex flex-col gap-[1.313rem] px-[2.5rem] py-[1.875rem] relative left-[6.875rem] w-[calc(100%-6.875rem)] bg-secondary'>
        <h2 className='text-title font-bold'>Catégories</h2>
        <Categories />
        <h2 className='text-title font-bold'>Liste des Pantalons</h2>
        <Products />
      </main>
      </AppContextProvider >

    </div>

  )
}

export default App