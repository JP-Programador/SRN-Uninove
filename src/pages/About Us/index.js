import React from "react";
import "./index.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Fundo from "../../assets/fundo1.png";
import Mis from "../../assets/img3 1 (1).png";
import Vis from "../../assets/cam.png";
import val from "../../assets/img12 1.png";
export default function About() {
  return (
    <div className="containerAb">
      <Header />
      <div class="container-about">
        <div class="box-about">
          <div class="text-box">
            <h1>NOSSA HISTÓRIA</h1>
            SRN – Segurança Residencial – Fundada em São Paulo em 30/03/2023 por
            um projeto universitário, intencionalmente com a preocupação em
            trazer a segurança aos nossos clientes de qualquer que seja a classe
            social, nossa fundação foi baseado em éticas ocupacionais de
            residências independente de seus bens avaliados, atendendo qualquer
            público alvo, e temos a intensão de não só proteger o seu
            patrimônio, e também trazer a segurança não somente a você, mas para
            toda sua família que é oque realmente importa na vida, mas também
            trazer a verdadeira paz que buscamos em proteger aquilo que
            realmente importa em nossa vida e que construímos com o tempo que as
            vezes não é favorável a nossa visão de segurança ao mundo, então
            trazemos a visão de segurança que os nosso clientes não precisam se
            preocupar. Tendo como sede em São Paulo, a SRN tem operações e
            atende todos os municípios da cidade.
          </div>
          <img src={Fundo} alt=""/>
        </div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="600">
              <h2 className="h2l">Missão</h2>
              <span className="spans">
                Nossa missão é prestar com qualidade as melhores soluções em
                segurança, por meio de rapidez, tecnologia e ética profissional,
                proporcionando o bem-estar de nossos clientes. Garantindo cada vez
                mais credibilidade, solidez e excelência no mercado.
              </span>
                <img src={Mis} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item" data-bs-interval="800">
              <h2 className="h2l">Visão</h2>
            <span className="spans">
              Nossa visão é estar entre as maiores seguradoras residenciais do
              país, sendo exemplo de segurança e confiabilidade.
            </span>
                <img src={Vis} class="d-block w-100" alt="..." width={'100px'}/>
                
              </div>
              <div class="carousel-item"data-bs-interval="800">
              <h2 className="h2l">Valores</h2>
            <span className="spans">
              {" "}
              Nosso valor em primeiro lugar é focar, perceber e decidir o que é
              relevante, planejando o tempo para execução do trabalho de forma
              eficiente, buscando soluções e estratégias para otimização dos
              processos. Tendo a capacidade de alcançar e superar metas
              estabelecidas, garantindo a qualidade no que é feito.
            </span>
                <img src={val} class="d-block w-100" alt="..."/>
                
              </div>
            </div>
      
        </div>
        </div>
      <Footer />
    </div>
  );
}
