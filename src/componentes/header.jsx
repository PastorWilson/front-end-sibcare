import logo from "../imgs/logos/Logo_branca.png";
import imgHamburgue from "../imgs/icones brancos/icons8-menu-hambúrguer-100.png";
import "../style/header.css";
import { Links } from "./Links";
import { Imgs } from "./imgs";
import { useState } from "react";

export const Header = () => {
  const [classOn, setClassOn] = useState(false)

  return (
    <div className="header">
      <div className="container-logo">
        <Links
          src="/Home"
          element={<Imgs src={logo} class="img-logo-header" alt="logo" />}
        />
      </div>
      <div className="">

      </div>
        <nav>
          <ul className="itens-links">
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
