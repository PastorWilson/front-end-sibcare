import { Imgs } from "./imgs";
import imgLogo from "../imgs/logos/logo_marrom.png";

import "../style/biografia.css";

export function Biografia() {
  return (
    <div id="container-sobre">
      <div id="container-bio">
        <div className="container-Img-bio">
          <Imgs src={imgLogo} class="img-logo-bio" />
        </div>
        <div className="container-info-bio">
          <h2 className="title-bio">Sobre nós</h2>
          <div className="container-text-bio">
            <p className="text-bio">
              Na SIBCARE, acreditamos que a verdadeira beleza vem de dentro e se
              reflete no exterior. Nossa clínica de estética é dedicada a
              proporcionar uma experiência única de bem-estar, focando no realce
              da sua beleza natural.
            </p>
            <p className="text-bio">
              Oferecemos uma variedade de tratamentos personalizados, desde
              cuidados com a pele até terapias relaxantes, todos desenvolvidos
              para atender às suas necessidades individuais. Nossa equipe de
              profissionais qualificados utiliza técnicas modernas e produtos de
              alta qualidade, sempre priorizando a sua saúde e segurança.
            </p>
          </div>
        </div>
      </div>
      <div id="container-info-principios">
        <div className="container-misao-visao">
          <div className="container-missao">
            <span className="title-missao">Missão</span>
            <div className="container-p-missao">
              Nossa missão é promover o bem-estar e a autoestima dos nossos
              clientes por meio de tratamentos estéticos personalizados que
              realcem a beleza natural. Trabalhamos com excelência e
              responsabilidade, sempre priorizando a saúde e a segurança de
              nossos clientes.
            </div>
          </div>
          <div className="container-visao">
            <span className="title-visao">Visão</span>
            <div className="container-p-visao">
              Ser reconhecida como a clínica de estética referência em bem-estar
              e beleza natural, proporcionando uma experiência transformadora e
              de qualidade. Queremos inspirar nossos clientes a abraçar sua
              singularidade e a se sentir bem em sua própria pele.
            </div>
          </div>
        </div>
        <div className="container-valores">
          <span className="title-valores">Valores</span>
          <ul className="lista-valores">
            <li>
              <span className="span-valores">Autenticidade:</span> Valorizamos a beleza única de cada
              indivíduo e promovemos a aceitação pessoal.
            </li>
            <li>
              <span className="span-valores">Qualidade:</span> Comprometemo-nos a oferecer tratamentos
              eficazes e seguros, utilizando produtos de alta qualidade e
              técnicas avançadas.
            </li>
            <li>
              <span className="span-valores">Cuidado:</span>Tratamos nossos clientes com empatia e
              respeito, criando um ambiente acolhedor e confortável.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
