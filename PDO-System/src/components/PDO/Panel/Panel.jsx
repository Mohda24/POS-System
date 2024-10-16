import React from 'react'
import ProductCart from '../ProductCart/ProductCart'
import img from '../../../../public/images/perfum-1.webp'

function Panel() {
    
    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

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
            <div className="total flex justify-between items-center">
                <h3 className='text-[18px] font-[700] leading-[100%]'>Total</h3>
                <span className='  opacity-[0.4] text-[18px] font-[700] leading-[100%] line-through'>1077.00<span className='text-[12px] ms-[4px]'></span>DH</span>
                <span className='  text-[18px] font-[700] leading-[100%] '>1077.00<span className='text-[12px] ms-[4px]'></span>DH</span>
            </div>
            <div className="Espece relative px-[20px] py-[14px] rounded-[12px] border-[1px] border-[#AAAAAA] flex focus-within:focus">
                <input 
                    type="number" 
                    className='max-w-[calc(100%-87px)] text-[16px] font-[700]' 
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <div className="base w-[87px] rounded-[11px] bg-tertiary h-full absolute top-0 right-0 text-[16px] font-[700] flex items-center justify-center">
                    23.00
                </div>
                <span className={`placeholder w-[54px] h-[17px] text-[#AAAAAA] bg-white text-[14px] absolute top-[50%] translate-y-[-50%] duration-300 ease-in-out pointer-events-none text-center ${inputValue ? 'top-[0px]' : ''}`}>Espèce</span>
            </div>
        </section>
    )
}

export default Panel