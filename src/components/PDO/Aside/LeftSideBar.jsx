import React, { useState } from "react";
import "../../../assets/style.css";
import { useAppContext } from "../../../contexts";


const listStyle = {
  display: "flex",
  gap:"0.25rem",
  alignItems:"center",
  flexDirection: "column",
  fontSize: "0.75rem",
  fontWeight: 400, 
  textAlign: "center", 
  padding:"15px 10px",
  borderRadius: "1rem", 
  cursor: "pointer", 
  transition: "all 300ms ease", 
  opacity: 1, 
};

function LeftSideBar() {
  const { colorPanel, setColorPanel } = useAppContext();
  const [activePage, setActivePage] = useState("Produits");
  return (
    <aside className="flex flex-col items-center  xl:justify-start xl:gap-[3.4375rem] px-[0.9375rem] py-[1.875rem] h-[100vh] fixed top-0 left-0 w-[6.875rem] bg-white">
      <div
        onClick={() => {
          setColorPanel(!colorPanel);
        }}
        className="recentagle w-[2.875rem] h-[2.8125rem] rounded-[3.5rem] bg-primary cursor-pointer mb-[55px]"
      />
      <nav className="flex-1 select-none">
        <ul>
          <li
            onClick={() => {
              setActivePage("Accueil");
            }}
            style={listStyle}
            className={`hover:opacity-60  ${
              activePage === "Accueil" && "bg-primary text-white"
            }`}
          >
            <img className={`w-[24px] h-[24px] object-cover  ${activePage === "Accueil" && "invert-[1]"}`} src="svg/home.svg"  alt="" />
            Accueil
          </li>
          <li
            onClick={() => {
              setActivePage("Produits");
            }}
            style={listStyle}
            className={`${activePage === "Produits" && "bg-primary text-white"}`}>
            <img className={`w-[24px] h-[24px] object-cover  ${activePage === "Produits" ? "invert-[-1]" : "invert-[1]"}`} src="/svg/dashboard.svg" alt="" />
            Produits
          </li>
          <li
            onClick={() => {
              setActivePage("Historique");
            }}
            style={listStyle}
            className={` ${activePage === "Historique" && "bg-primary text-white"}`}
          >
            <img className={`w-[24px] h-[24px] object-cover  ${activePage === "Historique" && "invert-[1]"}`} src="/svg/clock-04-stroke-rounded 1.svg" alt="" />
            Historique
          </li>
          <li
            onClick={() => {
              setActivePage("Caisse");
            }}
            style={listStyle}
            className={` ${activePage === "Caisse" && "bg-primary text-white"}`}
          >
            <img className={`w-[24px] h-[24px] object-cover  ${activePage === "Caisse" && "invert-[1]"}`}  src="/svg/wallet.svg" alt="" />
            Caisse
          </li>
          <li
            onClick={() => {
              setActivePage("Paramètres");
            }}
            style={listStyle}
            className={`${activePage === "Paramètres" && "bg-primary text-white"}`}>
            <img className={`w-[24px] h-[24px] object-cover  ${activePage === "Paramètres" && "invert-[1]"}`}  src="/svg/settings.svg" alt="" />
            Paramètres
          </li>
        </ul>
      </nav>
      <div style={listStyle}>
        <img src="/svg/logout.svg" alt="" />
        Déconnexion
      </div>
    </aside>
  );
}

export default LeftSideBar;
