import { useParams } from "react-router-dom";
import { Footer } from "../componentes/footer";
import { Imgs } from "../componentes/imgs";
import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../componentes/header";
import { Links } from "../componentes/Links";
import "../style/pageProcedimento.css";
import { Proc } from "../componentes/Proce";
import { Title } from "../componentes/title";

export function Procedimento() {
  
  const [procedimento, setProcedimento] = useState([]);
  const [procRelacionados, setProcRelacionados] = useState([]);

  const { id } = useParams();

  const getProc = async () => {
    try {
      const res = await axios.get(
        `https://api-sibcare-back-end.vercel.app/api/procedimento/${id}`
      ).then(valor=>{
        setProcedimento(valor.data)
        console.log(procedimento)
      })

    } catch (error) {
      console.log(error);
    }
  };
  const ProcedimentosRelacionados = async () => {
    try {
      const categoria = await procRelacionados.map((item) => {
        return item.categoria;
      });
      const dados = await axios.get(
        `https://api-sibcare-back-end.vercel.app/api/procedimentos/Corporais/${id}`
      );
      setProcRelacionados(dados.data);
    } catch (error) {}
  };

  useEffect(() => {
    getProc()
    ProcedimentosRelacionados()
  }, []);

  return (
    <div>
      <Title page="Procedimentos" />
      <Header />
      {procedimento.map((item) => (
        <div id="container-main-informacao-procedimento" key={item.key}>
          <div className="container-img-procedimento">
            <span className="span-img-procedimento">
              <Imgs src={item.imgUrl} class="img-procedimento" alt={item.alt} />
            </span>
          </div>
          <div className="container-info-procedimento">
            <div className="container-title">
              <h2 className="title">{item.nome}</h2>
            </div>
            <div className="container-descricao">
              <span className="descricao-procedimento">{item.breveDesc}</span>
              <span>{item.descricao}</span>
            </div>
            <div className="container-btn-link-whatsapp">
              <Links
                src="https://api.whatsapp.com/send?phone=5511916984545&text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta"
                element={<button className="btn-link-whatsapp">Agendar</button>}
                class="link_whatsapp"
              ></Links>
            </div>
          </div>
        </div>
      ))}

      <div id="container-procedimentos-relacionados">
        <div className="container-h2-procedimentos-relacionados">
          <span className="span-procedimento-relacionado">
            <h2 className="h2-procedimentos-relacionados">
              Procedimentos Relacionados
            </h2>
          </span>
          <div>
            <span>
              <Links
                src="/Procedimentos"
                class="link--ver-mais"
                element="Mostrar mais"
              />
            </span>
          </div>
        </div>
        <div className="container-procedimentos-relacionados">
          {procRelacionados.map((item) => (
            <div className="procedimento-relacionado" key={item.id}>
              <Links
                src={`/Procedimento/${item.id}`}
                style={{ "text-decoration": "None" }}
                class="links-procedimento-relacionado"
                element={
                  <div className="container-info-procedimento-relacionado">
                    <div className="container-img-procedimento-relacionado">
                      <Imgs
                        src={item.imgUrl}
                        alt={""}
                        class="img-procedimento-relacionado"
                      />
                    </div>
                    <div className="container-title-procedimento-relacionado">
                      <span className="title-procedimento-relacionado">
                        {item.nome}
                      </span>
                      <p className="p-descricao-procedimento-relacionado">
                        {item.breveDesc}
                      </p>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
