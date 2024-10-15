import React from 'react'
import Product from './components/PDO/Product/Product'
import Category from './components/PDO/category/Category'



import LeftSideBar from './components/PDO/Aside/LeftSideBar'


function App() {
  


  return (
    <>
    <LeftSideBar/>
    <main className='w-[calc(100%-28.75rem)] ms-[6.875rem] px-[2.5rem] py-[1.875rem]'>
    <Category/>
    <Product/>
    </main>
    
    
    
    
    </>
  
  
  
  
  
  
  )}

export default App