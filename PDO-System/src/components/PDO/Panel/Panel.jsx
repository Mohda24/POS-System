import React from 'react'
import ProductCart from '../ProductCart/ProductCart'
import img from '../../../../public/images/perfum-1.webp'
import '../../../assets/style.css'
import { useAppContext } from '../../../contexts'

function Panel() {

    const [especeValue, setEspece] = React.useState('');
    const [reductionValue, setReduction] = React.useState('');
    const [caise,setCaise]=React.useState('espece')
    const { productsInCart } = useAppContext();

    const handleInputChange = (e, setValue) => {
        setValue(e.target.value);
    };

    return (
        <section className='px-[40px] py-[40px] w-[350px] bg-white flex flex-col gap-[20px] fixed top-0 right-0 h-[100vh]'>
            <div className="panel flex flex-col gap-[20px]">
                <h2 className='text-[24px] font-[700]'>Panier</h2>
                <div className="products flex flex-col gap-[20px] h-[334px] overflow-y-auto">
                    {productsInCart && productsInCart.map((product,index)=>(
                        <ProductCart key={index} productName={product.productName} productPrice={product.price} productImage={product.image} />
                    ))}
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
                    value={especeValue}
                    onChange={(e) => handleInputChange(e, setEspece)}
                    min={0}
                />
                <div className="base w-[87px] rounded-[11px] bg-tertiary h-full absolute top-0 right-0 text-[16px] font-[700] flex items-center justify-center">
                    23.00
                </div>
                <span className={`placeholder w-[54px] h-[17px] text-[#AAAAAA] bg-white text-[14px] absolute top-[50%] translate-y-[-50%] duration-300 ease-in-out pointer-events-none text-center ${especeValue ? '!top-[0px]' : ''}`}>Espèce</span>
            </div>
            {/* redection */}
            <div className="Redection relative px-[20px] py-[14px] rounded-[12px] border-[1px] border-[#AAAAAA] flex focus-within:focus">
                <input
                    type="number"
                    className='max-w-full w-full text-[16px] font-[700]'
                    value={reductionValue}
                    onChange={(e) => handleInputChange(e, setReduction)}
                    min={0}
                />

                <span className={`placeholder w-[71px] h-[17px] text-[#AAAAAA] bg-white text-[14px] absolute top-[50%] translate-y-[-50%] duration-300 ease-in-out pointer-events-none text-center ${reductionValue ? '!top-[0px]' : ''}`}>Réduction</span>
            </div>
            {/* Caisse */}
            <div className="caise flex gap-[10px]">
                <div onClick={()=>setCaise('espece')} className={`p-[10px] border-2 rounded-[16px] flex flex-col gap-[4px] items-center w-full cursor-pointer select-none ${caise==='espece' ? 'bg-white border-2 border-black' :'bg-tertiary border-none'} `}>
                    <div className={`icon-banknote `} />
                    <span className='text-[16px]'>Espèce</span>

                </div>
                <div onClick={()=>setCaise('carte')} className={`p-[10px] border-2 rounded-[16px] flex flex-col gap-[4px] items-center w-full cursor-pointer select-none ${caise==='carte' ? 'bg-white border-2 border-black' :'bg-tertiary border-none'} `}>
                    <div className='icon-creditcards' />
                    <span className='text-[16px]'>Carte</span>
                </div>
                <button  className='w-full py-[14px] px-[20px] bg-primary rounded-[16px] text-[16px] text-white font-[700] hover:opacity-70 duration-300 ease-in-out'>Valider</button>
            </div>
        </section>
    )
}

export default Panel