import logo from "../imgs/logos/Logo_branca.png";
import imgHamburgue from "../imgs/icones brancos/menu-hamburguer-branco.png";
import "../style/header.css";
import { Links } from "./Links";
import { Imgs } from "./imgs";
import { useState } from "react";

export const Header = () => {
  const [classOn, setClassOn] = useState(true);

  
  const menuHamburguer = ()=>{
    setClassOn(!classOn)
  }
  return (
    <div className="header">
      <div className="container-logo">
        <Links
          src="/Home"
          element={<Imgs src={logo} class="img-logo-header" alt="logo" />}
        />
      </div>
      <div className="container-ico" >
        <img src={imgHamburgue} alt="" className="span-menu-hamburgue" onClick={menuHamburguer} />
      </div>
      <nav className={classOn ? "": "active"}>
        <ul className={classOn ? "itens-links" : "itens-links active"}>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <Links src="/Procedimentos" element={"Procedimentos"} />
          </li>
          <li>
            <Links src="/Sobre" element="Sobre" />
          </li>
          <li>
            <Links src="/Home#container-infomacoes-contato" element="Contato" />
          </li>
          <a
            href="https://api.whatsapp.com/send?phone=5511916984545&text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta"
            style={{ "text-decoration": "None" }}
          >
            <button className="btn-agendar">Agendar</button>
          </a>
        </ul>
      </nav>
    </div>
  );
};
