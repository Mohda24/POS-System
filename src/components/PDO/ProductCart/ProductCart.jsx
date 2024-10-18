import React from 'react'
import { useState } from 'react';

function ProductCart({productName, productPrice, productImage}) {
    const [count, setCount] = useState(1);
    return (
        <div className='producCard flex flex-col gap-[20px]'>
            <div className="productDetail flex gap-[20px]">
                <div className="productImage w-[70px] h-[70px] rounded-[16px]">
                    <img src={`public/images/${productImage}`} alt={productName} className='w-full h-full object-cover max-h-full max-w-full rounded-[16px] bg-yellow-50' />
                </div>
                <div className="productInfo flex flex-1 flex-col gap-[10px]">
                    <h3 className='text-[18px] leading-[120%] font-[400]'>{productName}</h3>
                    <div className="price-detail flex justify-between items-center">
                        <div className="counter flex gap-[6px] select-none">
                            <button className='text-[14px] w-[24px] h-[24px] p-[8px] bg-primary rounded-[6px] font-[400] text-white flex items-center justify-center' onClick={()=>setCount(count===1 ?count:count-1)}>-</button>
                            <span className='text-[16px] font-[400]'>{count}</span>
                            <button className='text-[14px] w-[24px] h-[24px] p-[8px] bg-primary rounded-[6px] font-[400] text-white flex items-center justify-center' onClick={()=>setCount(count+1)}>+</button>
                        </div>
                        <div className='price text-[16px] leading-[100%]'>{(productPrice*count).toFixed(2)}<span className='ms-[5px] text-[10px]'>DH</span></div>
                    </div>
                </div>
                
            </div>
            <div className="seperator h-[1px] w-full bg-[rgba(0,0,0,0.30)]"/>
        </div>
    )
}

export default ProductCart