
import React from 'react'
import products from '../../../../public/data/products.json';
import { useAppContext } from '../../../contexts';
import SkeletonCounted from '../Skeleton Counted/SkeletonCounted';
import CategorieSkeleton from '../Skeleton Loading/CategorieSkeleton';

function Category() {
  const { categories, filter, setFilter, setProducts } = useAppContext();
  Api_url = "data/products.json";
  // function for fetch Product using filter
  const getProductsByCategorie = async (categorie) => {
    try {
      setFilter(categorie);
      setProducts((prev) => ({ ...prev, loading: "pending", error: null }));
      const response = await fetch(Api_url);
      const data = await response.json();
      
      
      const filteredProducts = categorie==="all" ?data.products : data.products.filter(product => product.categorie == categorie);
      
      
      return setProducts((prev) => ({
        ...prev,
        payload: filteredProducts,
        loading: "fullfilled",
        error: null,
      }));
    }catch(error){
      return setProducts((prev) => ({
        ...prev,
        loading: "rejected",
        error: error,
      }));
    }
    


  }


  return (

    <div className='category mb-[21px]'>
      <h1 className='text-[24px] font-[700] mb-[21px] '>Catégories</h1>
      <div className="categorie-list flex flex-wrap gap-[0.9375rem] pb-[20px]">
        {categories.loading === 'fullfilled' && (
          <>
            <div className={`px-[1rem] py-[0.875rem] shadow-custom rounded-[2.5rem] text-[18px] font-[500] bg-white cursor-pointer  duration-300 ease-in-out  select-none ${filter === 'all' && 'border-2 border-black font-[700]'}`} onClick={() => getProductsByCategorie("all")}>Tout</div>
            {categories.payload.map((categorie) => {
              return (
                <div className={`px-[1rem] cursor-pointer py-[0.875rem] shadow-custom rounded-[2.5rem] text-[18px] font-[500] bg-white  duration-300 ease-in-out  select-none  ${filter === categorie.title && 'border-2 border-black font-[700]'}`} key={categorie.id} onClick={() => getProductsByCategorie(categorie.title)}>{categorie.title}</div>
              );
            })}
          </>
        )}
        {categories.loading === 'pending' && <SkeletonCounted Skeleton={CategorieSkeleton} count={5} />}

      </div>

    </div>
  )
}

export default Category
