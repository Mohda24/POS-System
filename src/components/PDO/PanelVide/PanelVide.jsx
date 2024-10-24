import React from 'react'


function PanelVide() {
    return (
        <div className="PanelVide flex-1 flex flex-col items-center justify-center gap-[10px]">
            <div className="QrImg w-[226.234px] h-[130px]">
                <img className='w-full h-full object-cover' src="images/QR.png" alt="Picture for QR code" />
            </div>
            <h3 className='text-[20px] font-[700] leading-[100%] text-center'>Votre panier est vide</h3>
            <p className='text-[16px] font-[400] leading-[130%] text-center max-w-[250px]'>Veuillez ajouter des produits en scannant le codebar</p>
        </div>
    )
}

export default PanelVide