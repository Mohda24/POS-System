import React from 'react'
import ProductCart from '../ProductCart/ProductCart'
import img from '../../../../public/images/perfum-1.webp'

function Panel() {
    
    return (
        <section className='px-[40px] py-[40px] w-[350px] bg-white flex flex-col gap-[20px] fixed top-0 right-0 h-[100vh]'>
            <div className="panel flex flex-col gap-[20px]">
                <h2 className='text-[24px] font-[700]'>Panier</h2>
                <div className="products flex flex-col gap-[20px] h-[334px] overflow-y-auto">
                    <ProductCart productName='Pantalon en Jean Léger' productPrice='359.99' productImage={img} />
                    <ProductCart productName='Pantalon en Jean Léger' productPrice='359.99' productImage={img} />
                    <ProductCart productName='Pantalon en Jean Léger' productPrice='359.99' productImage={img} />
                    <ProductCart productName='Pantalon en Jean Léger' productPrice='359.99' productImage={img} />
                    <ProductCart productName='Pantalon en Jean Léger' productPrice='359.99' productImage={img} />
                </div>
            </div>
            <div className="total">
                <h3 className='text-[18px]'>Total</h3>
            </div>
        </section>
    )
}

export default Panel