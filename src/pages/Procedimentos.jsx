import { Footer } from "../componentes/footer";
import { Header } from "../componentes/header";
import { Proc } from "../componentes/Proce";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import { Links } from "../componentes/Links";
import { Aside } from "../componentes/aside";
import video from "../imgs/videos/video-background-procedimentos.mp4"
import "../style/procedimentos.css";

import { Catalogo_procedimentos } from "../componentes/catalogo_procedimento";
import { Title } from "../componentes/title";

export function Procedimentos() {
  const [proce, setProce] = useState([]);


  const getProc = async () => {
    try {
      const res = await axios.get("https://api-sibcare-back-end.vercel.app/api/procedimentos");
      const dados = await res.data;
      setProce(dados);
    } catch (error) {
      console.log(error);
    }
  };
  const proCo = proce.filter((pro) => {
     return pro.categoria == "Corporais";
  });
  const proIn = proce.filter((pro) => {
    return pro.categoria == "Injetáveis";
  });
  const proFa = proce.filter((pro) => {
    return pro.categoria == "Faciais";
  });

  useEffect(() => {
    getProc().then(()=>{
      proCo();
      proIn();
      proFa();
    })
  }, []);

  return (
    <div>
      <Title page ="Procedimentos"/>
      <Header />
      <Aside />

      <div id="container-info-page">
        <div className="infor-page">
          <h2 className="title-catalogo-page">Nossos Procedimentos</h2>
          <span className="p-title-catalogo-page">Encontres seus tratamentos aqui</span>
        </div>
      </div>

      <Catalogo_procedimentos
        title="Faciais"
        element={proFa.map((item) => (
          <Proc
            id={item.id}
            key={item.id}
            imgUrl={item.imgUrl}
            name={item.nome}
            descricao={item.breveDesc}
            price={item.preco}
          />
        ))}
      />
      <Catalogo_procedimentos
        title="Corporais"
        element={proCo.map((item) => (
          <Proc
            id={item.id}
            key={item.id}
            imgUrl={item.imgUrl}
            name={item.nome}
            descricao={item.breveDesc}
            price={item.preco}
          />
        ))}
      />
      <Catalogo_procedimentos
        title="Injetáveis"
        element={proIn.map((item) => (
          <Proc
            id={item.id}
            key={item.id}
            imgUrl={item.imgUrl}
            name={item.nome}
            s
            descricao={item.breveDesc}
            price={item.preco}
          />
        ))}
      />
      <Footer />
    </div>
  );
}
