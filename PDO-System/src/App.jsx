import React from 'react'
import Products from './pages/Products'
import "./styles/global/style.css"
function App() {
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