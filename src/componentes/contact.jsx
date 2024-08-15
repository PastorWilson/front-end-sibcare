import { Iframe } from "./iframe";
import img_what from "../imgs/icones marrons/icon-what-marrom.png";
import img_tele from "../imgs/icones marrons/icon-telefone-marrom.png";
import img_maps from "../imgs/icones marrons/icon-maps-marrom.png";
import img_email from "../imgs/icones marrons/icon-email-marrom.png";
import "../style/contato.css";
import { Forms } from "./forms";
import { Links } from "./Links";
import { Imgs } from "./imgs";

export function Contact() {
  const info = {
    what: "(11) 91698-4545",
    tel: "(11) 91698-4545",
    email: "Sibcare1212@gmail.com",
    maps: "R. Cardoso de Almeida, 1372 - Perdizes",
  };
  const iframe =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7381027988863!2d-46.67428802467042!3d-23.541920278813233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57f54aa0f4b7%3A0x9b5310751132e22d!2sR.%20Cardoso%20de%20Almeida%2C%201372%20-%20Perdizes%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005013-001!5e0!3m2!1spt-BR!2sbr!4v1719945984999!5m2!1spt-BR!2sbr";

  return (
    <section className="section-contact">
      <div id="container-contact">
        <div className="container-forms">
          <Forms />
        </div>
        <div id="container-infomacoes-contato">
          <div className="informacoes-contato">
            <div className="container-title-contato">
              <label className="title-contato">Contato</label>
              <p className="p-contato">Encontre a melhor opção para você</p>
            </div>
            <div className="container-info">
              <span className="container-info-telefones">
                <Links
                  src="https://api.whatsapp.com/send?phone=5511916984545&text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta"
                  class="link-contato"
                  element={<Imgs src={img_what} class="img-contato" />}
                  element2={info.what}
                />
                <Links
                  class="link-contato"
                  src="tel:11-91698-4545"
                  element={<Imgs src={img_tele} class="img-contato" />}
                  element2={info.tel}
                />
              </span>
              <Links
                src="mailto:Sibcare1212@gmail.com"
                class="link-contato"
                element={<Imgs src={img_email} class="img-contato" />}
                element2={info.email}
              />
              <Links
                src="https://maps.app.goo.gl/qRYArw7evXwsEvdF8"
                class="link-contato"
                element={<Imgs src={img_maps} class="img-contato" />}
                element2={info.maps}
              />
            </div>
          </div>
          <div className="container-iframe">
            <Iframe src={iframe} width="400px" height="200px" class="iframe" />
          </div>
        </div>
      </div>
    </section>
  );
}
