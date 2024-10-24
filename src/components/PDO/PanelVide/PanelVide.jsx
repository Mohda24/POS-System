import React from 'react'


function PanelVide() {
    return (
        <div className="PanelVide flex-1 flex flex-col items-center justify-center gap-[.625rem]">
            <div className="QrImg w-[14.1396rem] h-[8.125rem]">
                <img className='w-full h-full object-cover' src="images/QR.png" alt="Picture for QR code" />
            </div>
            <h3 className='text-[1.25rem] font-[700] leading-[100%] text-center'>Votre panier est vide</h3>
            <p className='text-[1rem] font-[400] leading-[130%] text-center max-w-[250px]'>Veuillez ajouter des produits en scannant le codebar</p>
        </div>
    )
}

export default PanelVide