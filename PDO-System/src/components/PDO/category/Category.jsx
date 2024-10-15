import React from 'react'
import products from '../../../data/products.json'

function Category() {
  const categories=products.categories;
  return (
    <div className='category mb-[21px]'>
      <h1 className='text-[24px] font-[700] mb-[21px] '>Catégories</h1>
      <div className="categorie-list flex gap-[0.9375rem] pb-[20px]">
        <div className='px-[1rem] py-[0.875rem] shadow-custom rounded-[2.5rem] text-[18px] font-[500] bg-white'>Tout</div>
        {categories.map((categorie)=>{
          return(
            <div className='px-[1rem] py-[0.875rem] shadow-custom rounded-[2.5rem] text-[18px] font-[500] bg-white' key={categorie.id}>{categorie.title}</div>
          )
        })}

      </div>

    </div>
  )
}

export default Category
