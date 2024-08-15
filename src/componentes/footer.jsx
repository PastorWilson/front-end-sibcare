import imgLogo from "../imgs/logos/segunda-logo-branca.png";
import imgWhat from "../imgs/icones brancos/icon-what-branca.png";
import imgInst from "../imgs/icones brancos//icons8-instagram-50.png";
import imgEmail from "../imgs/icones brancos/icons8-nova-mensagem-50 (1).png";
import imgFacebook from "../imgs/icones brancos/icons8-facebook-100.png"
import "../style/footer.css";
import { Links } from "./Links";
import { Imgs } from "./imgs";

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div id="footer">
      <div className="container-right-footer">
        <div className="router-page">
          <h3 className="title-router">Links Utéis</h3>
          <Links element="Home" src="/Home" class="links-router" />
          <Links element="Procedimentos" src="/Procedimentos" class="links-router" />
          <Links element="Sobre" src="/Sobre" class="links-router" />
        </div>
        <div className="container-right-footer">
          <h3>Siga-nos</h3>
          <div>
            <Links
              src="https://api.whatsapp.com/send?phone=5511916984545&text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta"
              class="links-img-footer"
              element={<Imgs src={imgWhat} class="img-redes-footer" />}
              target="_blank"
            />
            <Links
              src="mailto:Sibcare1212@gmail.com"
              class="links-img-footer"
              element={<Imgs src={imgEmail} class="img-redes-footer" />}
            />
            <Links
              src="https://www.facebook.com/people/SIBCare-Estética-Corporal-e-Facial/61555088347319/"
              element={<Imgs src={imgFacebook} class="img-redes-footer" />}
              class ="links-img-footer"
              target="_blank"
            />
            <Links
              src="https://www.instagram.com/sibcare?igsh=MW85bDNxd2lodXgzNw=="
              class="links-img-footer"
               target="_blank"
              element={<Imgs src={imgInst} class="img-redes-footer" />}
            />
          </div>
        </div>
      </div>
      <div className="container-center-footer">
        <div>
          <Links
            element={<Imgs src={imgLogo} class="img-footer" />}
            src={"/Home" || "/"}
          />
        </div>
        <span className="">{year}© - Todos os direitos Reservados</span>
      </div>

      <div className="container-left-footer">
        <div className="container-title-info">
          <h3>Informações de Contato</h3>
        </div>
        <div className="container-info">
          <h4 className="title-info">Telefone:</h4>
          <span className="info">(11) 3875-4545</span>
          <span className="info">(11) 91698-4545</span>
        </div>
        <div className="container-info">
          <h4 className="title-info">E-mail:</h4>
          <span className="info">Sibcare1212@gmail.com</span>
        </div>
        <div className="container-info">
          <h4 className="title-info">Endereço:</h4>
          <span className="info">Rua Cardoso de Almeida, 1372 - Perdizes</span>
        </div>
      </div>
    </div>
  );
}
