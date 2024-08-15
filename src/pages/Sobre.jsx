import { Biografia } from "../componentes/biografia";
import { Carrossel } from "../componentes/carrossel";
import { Footer } from "../componentes/footer";
import { Header } from "../componentes/header";
import { Imgs } from "../componentes/imgs";
import { Title } from "../componentes/title";
import image1 from "../imgs/carrossel_sobre/image1.jpg";
import image2 from "../imgs/carrossel_sobre/image2.jpg";
import image3 from "../imgs/carrossel_sobre/image3.jpg";
import image4 from "../imgs/carrossel_sobre/image4.jpg";
import image5 from "../imgs/carrossel_sobre/image5.jpg";
import image6 from "../imgs/carrossel_sobre/image6.jpg";
import image7 from "../imgs/carrossel_sobre/image7.jpg";
import image8 from "../imgs/carrossel_sobre/image8.jpg";
import image9 from "../imgs/carrossel_sobre/image9.jpg";
import image10 from "../imgs/carrossel_sobre/image10.jpg";
import image11 from "../imgs/carrossel_sobre/image11.jpg";
import image12 from "../imgs/carrossel_sobre/image12.jpg";
import "../style/sobre.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export function Sobre() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  return (
    <div>
      <Title page="Sobre" />
      <Header />
      <Biografia />
      <div id="container-espaco-sibcare">
        <h2 className="title-sobre-carrossel">
          Conheça um pouco do nosso espaço
        </h2>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          images.map(itens =>(
            <SwiperSlide>
              <img src={itens} width={"100%"}/>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
      </div>
      
      <Footer />
    </div>
  );
}
