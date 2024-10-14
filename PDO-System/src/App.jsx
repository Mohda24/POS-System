import Products from './pages/Products'
import "./styles/global/style.css"

import products from './data/products.json'
import Categories from './pages/Categories';

function App() {
  console.log(products.products[0].image);


  return (
    <div >
      <section className='sidebar bg-slate-200 w-[6.875rem] h-[100vh] fixed'></section>
      <main className='flex flex-col gap-[1.313rem] px-[2.5rem] py-[1.875rem] relative left-[6.875rem] w-[calc(100%-6.875rem)] bg-secondary'>
        <h2 className='text-title font-bold'>Catégories</h2>
        <Categories />
        <h2 className='text-title font-bold'>Liste des Pantalons</h2>
        <Products />
      </main>

    </div>

  )
}

export default App