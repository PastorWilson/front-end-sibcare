import "../style/aside.css";
import { Imgs } from "./imgs";
import img_logo_whatsapp from "../imgs/icones brancos/icon-what-branca.png";
import { useState } from "react";
export function Aside() {
  const [isOpen, SetIsOpen] = useState(false);
  const toggleMenu = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <aside className="container-aside">
      <a href="https://api.whatsapp.com/send?phone=5511916984545&text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta" style={{"text-decoration":"None"}}>
        <div
          className={`container-aside-whatsapp ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <Imgs src={img_logo_whatsapp} class="aside-logo-whatsapp" />
        </div>
      </a>
    </aside>
  );
}
