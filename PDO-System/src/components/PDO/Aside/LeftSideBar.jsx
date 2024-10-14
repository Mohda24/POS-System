import React from 'react'
import '../../../assets/style.css'

function LeftSideBar() {
    return (
        <aside className='flex flex-col items-center gap-[55px] px-[15px] py-[30px] h-[100vh] fixed top-0 left-0 w-[110px] bg-white'>
            <div className="recentagle w-[2.875rem] h-[45px] rounded-[56px] bg-primary cursor-pointer"/>
            <nav className='flex-1 select-none'>
                <ul>
                    <li className='text-[12px] font-[400] text-center px-[10px] py-[15px] rounded-[16px] hover:opacity-60 cursor-pointer duration-300 ease transition-all'>
                    <div className='icon-home text-[24px] mb-[4px] '/>
                    Accueil
                    </li>
                    <li className='text-[12px] font-[400] text-center px-[10px] py-[15px] rounded-[16px] bg-primary'>
                    <div className='icon-shopping-bag text-[24px] mb-[4px] '/>
                    Produits
                    </li>
                    <li className='text-[12px] font-[400] text-center px-[10px] py-[15px] rounded-[16px] hover:opacity-60 cursor-pointer duration-300 ease transition-all'>
                    <div className='icon-history text-[24px] mb-[4px] '/>
                    Historique
                    </li>
                    <li className='text-[12px] font-[400] text-center px-[10px] py-[15px] rounded-[16px] hover:opacity-60 cursor-pointer duration-300 ease transition-all'>
                    <div className='icon-shopping-bag text-[24px] mb-[4px] '/>
                    Caisse
                    </li>
                    <li className='text-[12px] font-[400] text-center px-[10px] py-[15px] rounded-[16px] hover:opacity-60 cursor-pointer duration-300 ease transition-all'>
                    <div className='icon-cog text-[24px] mb-[4px] '/>
                    Paramètres
                    </li>
                    
                </ul>
            </nav>
            <div className="log-out text-[12px] font-[400] text-center">
                <div className="icon-log-out text-[24px] mb-[2px]"></div>
                Déconnexion
            </div>
        </aside>
    )
}

export default LeftSideBar