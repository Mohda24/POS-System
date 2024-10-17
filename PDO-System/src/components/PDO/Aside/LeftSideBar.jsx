import React from 'react'
import '../../../assets/style.css'
import { useAppContext } from '../../../contexts'

function LeftSideBar() {
    const {coloPanel,setColorPanel}=useAppContext();
    return (
        <aside className='flex flex-col items-center gap-[3.4375rem] px-[0.9375rem] py-[1.875rem] h-[100vh] fixed top-0 left-0 w-[6.875rem] bg-white'>
            <div onClick={()=>{setColorPanel(!coloPanel)}} className="recentagle w-[2.875rem] h-[2.8125rem] rounded-[3.5rem] bg-primary cursor-pointer"/>
            <nav className='flex-1 select-none'>
                <ul>
                    <li className='text-[0.75rem] font-[400] text-center px-[0.625rem] py-[0.9375rem] rounded-[1rem] hover:opacity-60 cursor-pointer duration-300 ease transition-all'>
                    <div className='icon-home text-[1.5rem] mb-[0.25rem] '/>
                    Accueil
                    </li>
                    <li className='text-[0.75rem] font-[400] text-center px-[0.625rem] py-[0.9375rem] rounded-[1rem] bg-primary'>
                    <div className='icon-shopping-bag text-[1.5rem] mb-[0.25rem] '/>
                    Produits
                    </li>
                    <li className='text-[0.75rem] font-[400] text-center px-[0.625rem] py-[0.9375rem] rounded-[1rem] hover:opacity-60 cursor-pointer duration-300 ease transition-all'>
                    <div className='icon-history text-[1.5rem] mb-[0.25rem] '/>
                    Historique
                    </li>
                    <li className='text-[0.75rem] font-[400] text-center px-[0.625rem] py-[0.9375rem] rounded-[1rem] hover:opacity-60 cursor-pointer duration-300 ease transition-all'>
                    <div className='icon-shopping-bag text-[1.5rem] mb-[0.25rem] '/>
                    Caisse
                    </li>
                    <li className='text-[0.75rem] font-[400] text-center px-[0.625rem] py-[0.9375rem] rounded-[1rem] hover:opacity-60 cursor-pointer duration-300 ease transition-all'>
                    <div className='icon-cog text-[1.5rem] mb-[0.25rem] '/>
                    Paramètres
                    </li>
                    
                </ul>
            </nav>
            <div className="log-out text-[0.75rem] font-[400] text-center">
                <div className="icon-log-out text-[1.5rem] mb-[0.125rem]"></div>
                Déconnexion
            </div>
        </aside>
    )
}

export default LeftSideBar