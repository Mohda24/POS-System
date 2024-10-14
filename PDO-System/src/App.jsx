import Products from './pages/Products'
import "./styles/global/style.css"

import products from './data/products.json'

function App() {
  console.log(products.products[0].image);


  return (
    <div >
      <section className='sidebar bg-slate-200 w-[6.875rem] h-[100vh] fixed'></section>
      <main className='relative left-[6.875rem] w-[calc(100%-6.875rem)] bg-secondary'>
        <Products />
      </main>

    </div>

  )
}

export default App