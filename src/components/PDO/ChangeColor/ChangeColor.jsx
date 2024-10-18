import React from 'react'
import { useAppContext } from '../../../contexts'

function ChangeColor() {
    const {colorPanel, setColorPanel} = useAppContext();
    const ChangeGlobalColor=(color)=>{
        document.documentElement.style.setProperty('--color-primary',color);
        setColorPanel(false);
    }
    return (
        <div className={`changeColor fixed ${colorPanel ? 'right-0' :'right-[-100%]'} top-0 px-[15px] py-[10px] flex flex-col items-center gap-[20px] bg-secondary shadow-2xl rounded-md duration-300 ease-out`}>
            <button onClick={() => ChangeGlobalColor('#965E47')} className='w-[35px] h-[35px] rounded-[50%] bg-[#965E47]' title='#965E47' />
            <button onClick={() => ChangeGlobalColor('#FF5733')} className='w-[35px] h-[35px] rounded-[50%] bg-[#FF5733]' title='#FF5733' />
            <button onClick={() => ChangeGlobalColor('#f1c40fa8')} className='w-[35px] h-[35px] rounded-[50%] bg-[#f1c40fa8]' title='#f1c40fa8' />
            <button onClick={() => ChangeGlobalColor('#77DD77')} className='w-[35px] h-[35px] rounded-[50%] bg-[#77DD77]' title='#77DD77' />
            <button onClick={() => ChangeGlobalColor('#779ECB')} className='w-[35px] h-[35px] rounded-[50%] bg-[#779ECB]' title='#779ECB' />
            <button onClick={() => ChangeGlobalColor('#F7CAC9')} className='w-[35px] h-[35px] rounded-[50%] bg-[#F7CAC9]' title='#F7CAC9' />
        </div>
    )
}

export default ChangeColor