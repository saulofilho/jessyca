import React from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import './PessoasPageCarousel.css';

const PessoasPageCarousel = ({
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
            <div className="pessoas-car-vert-we-are" data-hash="slide1">
              <div className="default-flex">
                <p className="default-text-header container">as pessoas</p>
                <p className="default-text-title container">we are ffwd</p>
                <p className="default-text-sub container">
                  Somos nativos digitais, criativos e especialistas.
                  Mas mais que isso, somos a mistura de conhecimentos
                  múltiplos, um time completo.
                </p>
              </div>
            </div>
            <div className="pessoas-car-vert-one">
              <p className="default-text-title container">
                the people behind our work.
              </p>
              <div className="default-flex owner">
              </div>
            </div>
            <div className="pessoas-car-vert-two">
              <div className="default-flex">
                <div className="owner-text">
                  <p className="default-text-sub container">
                    Todos que entram aqui tem em comum a vontade de fazer
                    diferente. Somos inquietos e nunca paramos de buscar soluções
                    para os problemas: dos nossos clientes, do dia-a-dia, da sociedade.
                    Nossa grande aspiração é mudar a relação entre marcas e pessoas,
                    gerar experiências incríveis e transmitir a verdade das marcas.
                    Para isso, contamos com um time completo, com pessoas que
                    acreditam que a união entre estratégia, comunicação,
                    tecnologia e criatividade são a chave para entregar melhores
                    serviços e experiências.
                    <br />
                    <br />
                    Aqui, abraçamos as suas causas e seus sonhos.
                  </p>
                </div>
                <div className="the-team">
                  <p className="default-text-title invert-color container">
                    the team.
                  </p>
                  <p className="defaul-text-sub container invert-color">
                    E que time! Nossos atendimentos, social medias, designers,
                    desenvolvedores e recursos humanos. Nossos FFrs.
                  </p>
                </div>
              </div>
            </div>
            <div className="pessoas-car-vert-three">
              <div className="default-flex">
                <div className="team-wrapper">
                  <div className="default-flex team">
                  </div>
                </div>
                <div className="the-heads">
                  <div className="default-flex">
                    <p className="default-text-title container">
                      the heads.
                  </p>
                    <p className="defaul-text-sub container">
                      Nossas lideranças, os representantes dos valores da FFWD.
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pessoas-car-vert-four">
              <div className="default-flex man">
              </div>
              <div className="default-flex woman">
              </div>
            </div>
          </Swiper>
        </div>
        <div>
        <Swiper {...VerticalSwiperParams}>
            <div className="cultura-car-vert-our-culture" data-hash="slide1">
              <div className="default-flex">
                <p className="default-text-header container">
                  cultura
                </p>
                <p className="default-text-title container">
                  our culture
                </p>
                <p className="default-text-sub container">
                  Cultura nos ajuda a atrair pessoas incríveis e motivadas, 
                  ela amplifica suas habilidades e os ajuda a alcançar sua 
                  melhor forma. Esta palavras do código de cultura não são vazias.
                </p>
              </div>
            </div>
            <div className="cultura-car-vert-one">
              <div className="default-flex">
                <p className="invert-color default-text-header container">
                  cultura
                </p>
                <p className="invert-color default-text-title container">
                  01/10. Amazing People 
                  Don't like average goals
                </p>
                <p className="invert-color default-text-sub container">
                  Oferecemos grandes desafios para grandes conquistas e queremos 
                  ser parceiros no crescimento de cada indivíduo, por isso aqui 
                  contratamos por atitude e treinamos a técnica. Acreditamos que 
                  tudo é possível quando se tem convicção, direcionamento e amor. 
                  30% conhecimento 70% comportamento
                </p>
              </div>
            </div>
            <div className="cultura-car-vert-one">
              <div className="default-flex">
                <p className="invert-color default-text-header container">
                  cultura
                </p>
                <p className="invert-color default-text-title container">
                  02/10. Amazing People 
                  Don't like average goals
                </p>
                <p className="invert-color default-text-sub container">
                  Oferecemos grandes desafios para grandes conquistas e queremos 
                  ser parceiros no crescimento de cada indivíduo, por isso aqui 
                  contratamos por atitude e treinamos a técnica. Acreditamos que 
                  tudo é possível quando se tem convicção, direcionamento e amor. 
                  30% conhecimento 70% comportamento
                </p>
              </div>
            </div>
            <div className="cultura-car-vert-one">
              <div className="default-flex">
                <p className="invert-color default-text-header container">
                  cultura
                </p>
                <p className="invert-color default-text-title container">
                  03/10. Amazing People 
                  Don't like average goals
                </p>
                <p className="invert-color default-text-sub container">
                  Oferecemos grandes desafios para grandes conquistas e queremos 
                  ser parceiros no crescimento de cada indivíduo, por isso aqui 
                  contratamos por atitude e treinamos a técnica. Acreditamos que 
                  tudo é possível quando se tem convicção, direcionamento e amor. 
                  30% conhecimento 70% comportamento
                </p>
              </div>
            </div>
            <div className="cultura-car-vert-one">
              <div className="default-flex">
                <p className="invert-color default-text-header container">
                  cultura
                </p>
                <p className="invert-color default-text-title container">
                  04/10. Amazing People 
                  Don't like average goals
                </p>
                <p className="invert-color default-text-sub container">
                  Oferecemos grandes desafios para grandes conquistas e queremos 
                  ser parceiros no crescimento de cada indivíduo, por isso aqui 
                  contratamos por atitude e treinamos a técnica. Acreditamos que 
                  tudo é possível quando se tem convicção, direcionamento e amor. 
                  30% conhecimento 70% comportamento
                </p>
              </div>
            </div>
            <div className="cultura-car-vert-one">
              <div className="default-flex">
                <p className="invert-color default-text-header container">
                  cultura
                </p>
                <p className="invert-color default-text-title container">
                  05/10. Amazing People 
                  Don't like average goals
                </p>
                <p className="invert-color default-text-sub container">
                  Oferecemos grandes desafios para grandes conquistas e queremos 
                  ser parceiros no crescimento de cada indivíduo, por isso aqui 
                  contratamos por atitude e treinamos a técnica. Acreditamos que 
                  tudo é possível quando se tem convicção, direcionamento e amor. 
                  30% conhecimento 70% comportamento
                </p>
              </div>
            </div>
            <div className="cultura-car-vert-one">
              <div className="default-flex">
                <p className="invert-color default-text-header container">
                  cultura
                </p>
                <p className="invert-color default-text-title container">
                  06/10. Amazing People 
                  Don't like average goals
                </p>
                <p className="invert-color default-text-sub container">
                  Oferecemos grandes desafios para grandes conquistas e queremos 
                  ser parceiros no crescimento de cada indivíduo, por isso aqui 
                  contratamos por atitude e treinamos a técnica. Acreditamos que 
                  tudo é possível quando se tem convicção, direcionamento e amor. 
                  30% conhecimento 70% comportamento
                </p>
              </div>
            </div>
            <div className="cultura-car-vert-one">
              <div className="default-flex">
                <p className="invert-color default-text-header container">
                  cultura
                </p>
                <p className="invert-color default-text-title container">
                  07/10. Amazing People 
                  Don't like average goals
                </p>
                <p className="invert-color default-text-sub container">
                  Oferecemos grandes desafios para grandes conquistas e queremos 
                  ser parceiros no crescimento de cada indivíduo, por isso aqui 
                  contratamos por atitude e treinamos a técnica. Acreditamos que 
                  tudo é possível quando se tem convicção, direcionamento e amor. 
                  30% conhecimento 70% comportamento
                </p>
              </div>
            </div>
            <div className="cultura-car-vert-one">
              <div className="default-flex">
                <p className="invert-color default-text-header container">
                  cultura
                </p>
                <p className="invert-color default-text-title container">
                  08/10. Amazing People 
                  Don't like average goals
                </p>
                <p className="invert-color default-text-sub container">
                  Oferecemos grandes desafios para grandes conquistas e queremos 
                  ser parceiros no crescimento de cada indivíduo, por isso aqui 
                  contratamos por atitude e treinamos a técnica. Acreditamos que 
                  tudo é possível quando se tem convicção, direcionamento e amor. 
                  30% conhecimento 70% comportamento
                </p>
              </div>
            </div>
            <div className="cultura-car-vert-one">
              <div className="default-flex">
                <p className="invert-color default-text-header container">
                  cultura
                </p>
                <p className="invert-color default-text-title container">
                  09/10. Amazing People 
                  Don't like average goals
                </p>
                <p className="invert-color default-text-sub container">
                  Oferecemos grandes desafios para grandes conquistas e queremos 
                  ser parceiros no crescimento de cada indivíduo, por isso aqui 
                  contratamos por atitude e treinamos a técnica. Acreditamos que 
                  tudo é possível quando se tem convicção, direcionamento e amor. 
                  30% conhecimento 70% comportamento
                </p>
              </div>
            </div>
            <div className="cultura-car-vert-one">
              <div className="default-flex">
                <p className="invert-color default-text-header container">
                  cultura
                </p>
                <p className="invert-color default-text-title container">
                  10/10. Amazing People 
                  Don't like average goals
                </p>
                <p className="invert-color default-text-sub container">
                  Oferecemos grandes desafios para grandes conquistas e queremos 
                  ser parceiros no crescimento de cada indivíduo, por isso aqui 
                  contratamos por atitude e treinamos a técnica. Acreditamos que 
                  tudo é possível quando se tem convicção, direcionamento e amor. 
                  30% conhecimento 70% comportamento
                </p>
              </div>
            </div>
          </Swiper>
        </div>
        <div>
          <Swiper {...VerticalSwiperParams}>
          <div className="vagas-car-vert">
              <div className="default-flex">
                <p className="default-text-header container">
                  vagas
                </p>
                <p className="default-text-title container">
                  nossas vagas
                </p>
                <p className="default-text-sub container">
                  Se você gosta de aprender, trocar experiências e criar coisas 
                  F*DAS, esse é o seu lugar.
                </p>
              </div>
            </div>
            {posts.map(img => (
              <div className="vagas-index">
                <div className="default-flex">
                  <div className="default-text-header container invert-color">
                    {img.header}
                  </div>
                  <div className="default-text-title container invert-color">
                    {img.title}
                  </div>
                  <div className="default-text-sub container invert-color">
                    {img.about}
                  </div>
                  <div className="container pessoas-car-img">
                    <a href={img.slug} key={img.featuredImage}>
                      <p className="default-text-subinvert-color">Apply.</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
      </Swiper>
    </>
  );
};

export default PessoasPageCarousel;