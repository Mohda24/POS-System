import React from 'react'
import products from './data/products.json'
import LeftSideBar from './components/PDO/Aside/LeftSideBar'

function App() {
  console.log(products.products[0].image);


  return (

    <LeftSideBar/>


  )
}

export default App