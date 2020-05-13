import React from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import './SobrePageCarousel.css';

const SobrePageCarousel = ({
  posts,
}) => {

  const HorizontalSwiperParams = {
    slidesPerView: 1,
    loop: true,
    grabCursor: false,
    effect: 'fade',
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: '.swiper-pagination.swiper-pagination-h',
      clickable: true
    }
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  };

  const VerticalSwiperParams = {
    direction: 'vertical',
    grabCursor: false,
    freeMode: true,
    hashNavigation: {
      watchState: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
      clickable: true
    },
    mousewheel: true
  }

  return (
    <>
      <Swiper {...HorizontalSwiperParams}>
        <div>
          <Swiper {...VerticalSwiperParams}>
            <div className="sobre-car-vert-nos-somos" data-hash="slide1">
              <div className="default-flex">
                <p className="default-text-header container">nós somos</p>
                <p className="default-text-title container">mais que digital</p>
                <p className="default-text-sub container">
                  Você pode pensar que somos uma agência de marketing digital.
                  Mas nós somos mais do que isso.
                </p>
                <div className="default-btn container padding-btn">
                  <button>
                    we make great launches
                  </button>
                </div>
              </div>
            </div>
            <div className="sobre-car-vert-one">
              <div className="default-flex">
                <p className="invert-color default-text-header container">
                  quem somos
                </p>
                <p className="invert-color default-text-title container">
                  mais que comunicacao. experiencias
                </p>
                <p className="invert-color default-text-sub container">
                  Nascemos digital e evoluímos. Combinamos estratégia, 
                  criatividade e inovação para criar experiências completas em 
                  todos os pontos de contato das marcas com seus consumidores.
                </p>
                <div className="default-btn container padding-btn">
                  <button>
                    Conheca nossos cases
                  </button>
                </div>
              </div>
            </div>
            <div className="sobre-car-vert-two">
            <div className="default-flex">
                <p className="default-text-header container">quem somos</p>
                <p className="default-text-title container">assista ao nosso manifesto</p>
              </div>
            </div>
            <div className="sobre-car-vert-three">
            <div className="default-flex">
                <p className="invert-color default-text-header container">nossa abordagem</p>
                <p className="invert-color default-text-title container">digital first</p>
                <p className="invert-color default-text-sub container">
                  <strong>
                    O Digital First provoca a deixar de lado
                    o favoritismo pelo que é tradicional.
                  </strong>
                  <br/>
                  <br/>
                    É estar conectado com o mundo, com as mudanças. 
                    É colocar os consumidores no centro das decisões.
                    Propomos um novo pensamento, uma nova forma de enxergar 
                    oportunidades, de solucionar problemas, de conquistar o mundo. 
                </p>
                <div className="default-btn container padding-btn">
                  <button>
                    Nossos Servicos
                  </button>
                </div>
              </div>
            </div>
            <div className="sobre-car-vert-four">
            <div className="default-flex">
                <p className="default-text-title container">we make great launches</p>
                <p className="default-text-sub container">
                Nossa capacidade interdisciplinar e abordagem digital first 
                garantem a criação de 
                experiências que abrangem todos os pontos de contato digitais 
                e físicos das marcas, 
                gerando muito mais impacto e valor para os consumidores.
                </p>
                <p className="default-text-line container">
                  nos fazemos grandes lancamentos
                </p>
                <div className="default-btn container padding-btn">
                  <button>
                    Great Launches
                  </button>
                </div>
                <div className="default-text-header btn-subir container">
                  <a href="#slide1">
                    <p>
                      ↑
                      <br/>
                      subir
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
        <div>
          <Swiper {...VerticalSwiperParams}>
            <div className="sobre-car-vert-servicos" data-hash="slide2">
              <div className="default-flex">
                <p className="default-text-header container">serviços</p>
                <p className="default-text-sub container">
                  Criamos experiências autênticas e apaixonantes para conectar 
                  marcas e pessoas.
                </p>
                <p className="default-text-header container low-text-header">
                  Unindo diferentes competências a abordagem digital first, 
                  estamos aqui para fazer grandes lançamentos para o mercado. 
                  Como? A partir dos pilares:
                </p>
                <p className="default-text-sub font-text-sub container">
                  ESTRATÉGIA
                <br/>
                <br/>
                  MARKETING
                <br/>
                <br/>
                  EXPERIÊNCIA
                </p>
              </div>
            </div>
            <div className="sobre-car-vert-servicos-one"></div>
            <div className="sobre-car-vert-servicos-two">
              <div className="default-flex">
                <div className="pilares-div container">
                  <p className="invert-color default-text-title">
                    pilares
                  </p>
                </div>
                <div className="estrategia-row container">
                  <p className="default-text-header invert-color">
                    Estratégia
                  </p>
                  <p className="default-text-header invert-color low-text-header">
                    Campanhas/Launches
                    <br/>
                    Consultoria de Presença Digital
                    <br/>
                    Branding
                    <br/>
                    Inovação Aberta
                    <br/>
                    Planejamento Estratégico
                  </p>
                </div>
                <div className="estrategia-row container">
                  <p className="default-text-header invert-color">
                    Estratégia
                  </p>
                  <p className="default-text-header invert-color low-text-header">
                    Campanhas/Launches
                    <br/>
                    Consultoria de Presença Digital
                    <br/>
                    Branding
                    <br/>
                    Inovação Aberta
                    <br/>
                    Planejamento Estratégico
                  </p>
                </div>
                <div className="estrategia-row container">
                  <p className="default-text-header invert-color">
                    Estratégia
                  </p>
                  <p className="default-text-header invert-color low-text-header">
                    Campanhas/Launches
                    <br/>
                    Consultoria de Presença Digital
                    <br/>
                    Branding
                    <br/>
                    Inovação Aberta
                    <br/>
                    Planejamento Estratégico
                  </p>
                </div>
              </div>
            </div>
            <div className="sobre-car-vert-servicos-three">
            <div className="default-flex">
                <p className="default-text-title container">we make great launches</p>
                <p className="default-text-sub container">
                Nossa capacidade interdisciplinar e abordagem digital first 
                garantem a criação de 
                experiências que abrangem todos os pontos de contato digitais 
                e físicos das marcas, 
                gerando muito mais impacto e valor para os consumidores.
                </p>
                <p className="default-text-line container">
                  nos fazemos grandes lancamentos
                </p>
                <div className="default-btn container padding-btn">
                  <button>
                    Great Launches
                  </button>
                </div>
                <div className="default-text-header btn-subir container">
                  <a href="#slide2">
                    <p>
                      ↑
                      <br/>
                      subir
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </Swiper>
    </>
  );
};

export default SobrePageCarousel;