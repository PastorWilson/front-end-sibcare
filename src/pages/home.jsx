import { Biografia } from "../componentes/biografia";
import { Contact } from "../componentes/contact";
import { Footer } from "../componentes/footer";
import { Header } from "../componentes/header";
import { Depoimentos } from "../componentes/depoimentos";
import { Aside } from "../componentes/aside";
import { Carrossel } from "../componentes/carrossel";
import { Areas } from "../componentes/areas";
import image1 from "../imgs/carrossel_home/image1.jpg";
import "../style/home.css";
import React, { useRef, useState } from "react";
import img_corporal from "../imgs/estetica-corporal-1.png";
import img_facial from "../imgs/areas/facial.jpg"
import img_injetaveis from "../imgs/areas/injetaveis.jpg"
import { Title } from "../componentes/title";

export function Home() {
  return (
    <div id="main">
      <Title page="Home Page" />
      <Header />
      <Aside />
      <div>
        <img src={image1} className="img-home-main"/>
      </div>

      <div className="container-title-area-atuacao">
        <h2 className="title-area-atuacao">Areas de Atuação</h2>
      </div>
      <div className="container-areas-atuacao">
        <Areas
          title="Facial"
          urlLink="/Procedimentos"
          src={img_facial}
          alt="img_facial"
          descricao="A estética facial é uma área da estética que se concentra na saúde e beleza do rosto, 
          buscando melhorar a aparência e a harmonia facial através de diversos procedimentos."
        />
        <Areas
          title="Corporal"
          src={img_corporal}
          urlLink="/Procedimentos"
          descricao="A estética corporal é uma área que se dedica à melhoria da aparência e saúde do corpo, 
        abrangendo uma ampla gama de procedimentos e técnicas que visam promover o bem-estar físico e emocional."
        />
        <Areas
          title="Injetaveis"
          src={img_injetaveis}
          urlLink="/Procedimentos"
          descricao="A área de estética injetável se refere a um conjunto de procedimentos minimamente invasivos 
        que utilizam injeções para melhorar a aparência da pele e do corpo. "
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
