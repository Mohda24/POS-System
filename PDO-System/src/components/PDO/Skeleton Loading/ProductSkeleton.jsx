import React from 'react'

function ProductSkeleton() {
    return (
        <div className="card flex flex-col gap-[1.25rem] w-[22.1875rem] p-[1.5rem] bg-white rounded-[1.25rem]">
            <div className='flex gap-[20px]'>
                <div className='w-[110px] h-[110px] rounded-[16px] animate-skeleton'></div>
                <div className='w-full max-w-[177px] my-[10px]'>
                    <div className='w-full h-[18px] animate-skeleton rounded-md mb-[4px]'></div>
                    <div className='w-[40px] h-[18px] animate-skeleton rounded-md'></div>
                    <div className='mt-[10px] h-[24px] w-[70px] animate-skeleton rounded-md'></div>
                </div>

            </div>
            <div>
                <span className='block h-[19px] w-[38px] animate-skeleton rounded-md mb-[10px]'></span>
                <div className='flex gap-[10px]'>
                    <span className='block h-[30px] w-[43px] animate-skeleton rounded-[60px]'></span>
                    <span className='block h-[30px] w-[43px] animate-skeleton rounded-[60px]'></span>
                    <span className='block h-[30px] w-[43px] animate-skeleton rounded-[60px]'></span>
                    <span className='block h-[30px] w-[43px] animate-skeleton rounded-[60px]'></span>
                    <span className='block h-[30px] w-[43px] animate-skeleton rounded-[60px]'></span>
                    <span className='block h-[30px] w-[43px] animate-skeleton rounded-[60px]'></span>
                </div>
                <span className='block h-[19px] w-[58px] animate-skeleton rounded-md mt-[20px]'></span>
                <div className='flex gap-[10px] flex-wrap mt-[10px]'>
                    <span className='block h-[30px] w-[74px] animate-skeleton rounded-[60px]'></span>
                    <span className='block h-[30px] w-[74px] animate-skeleton rounded-[60px]'></span>
                    <span className='block h-[30px] w-[74px] animate-skeleton rounded-[60px]'></span>
                    <span className='block h-[30px] w-[74px] animate-skeleton rounded-[60px]'></span>
                    <span className='block h-[30px] w-[74px] animate-skeleton rounded-[60px]'></span>

                </div>

            </div>
            <div className='h-[1px] w-full animate-skeleton my-[20px]'></div>
            <div className='w-full h-[37px] rounded-[12px] animate-skeleton'></div>
        </div>
    )
}

export default ProductSkeleton