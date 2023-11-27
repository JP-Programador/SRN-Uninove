import './index.css'
import Footer from "../../components/footer";
import Header from "../../components/header";

import furto from '../../assets/furto.jpg'
import cameras from '../../assets/cameras.jpg'
import fogo from '../../assets/fire.jpg'
import cercas from '../../assets/cerca5.jpg'
import Fechaduras from '../../assets/fechadura-digital.jpg'
import encanador from '../../assets/encanador.webp'
import monitoramento from '../../assets/camera-icon.svg'
import pesssoas from '../../assets/crowd.svg'
import calculadora from '../../assets/calculator.svg'


export default function Home (){
    return (
        <div className="containerH">
            <Header />
            <div class="container-home">
            <h2 id='cli2'>PROTEGENDO</h2>
            <h1 id='cli1'>O QUE MAIS IMPORTA</h1>
            <span className='srb'> A SRN ADVANCED está no mercado com estrutura e profissionais capacitados para  dar tranquilidade à sua vida. <br></br> Ligue agora e agende uma visita!</span>
            <button> <a href="../Contact us/index.html">   Entre em Contato</a></button> 
        </div>

        <div class="one-range">
            <div class="box-line"><h4>Nossos Serviços</h4><span>CONFIANÇA NA QUALIDADE, NA TECNOLOGIA E NA PROTEÇÃO</span></div>
            <div class="all-box">
            <div class="one-box">
                <img src={furto} alt="pessoa tentando abrir a porta" />
                <div class="title-box">Roubo & Furto</div>
            </div>
            <div class="one-box">
                <img src={cameras} alt="camera monitorando" />
                <div class="title-box">Monitoramento</div>
            </div>
            <div class="one-box">
                <img src={fogo} alt="incendio na casa, com bombeiro apagando" />
                <div class="title-box">Incêndio</div>
            </div>
            <div class="one-box">
                <img src={cercas} alt="cercas elétricas na residência" />
                <div class="title-box">Cercas Elétricas</div>
            </div>
            <div class="one-box">
                <img src={Fechaduras} alt="fechadura digital na porta" />
                <div class="title-box">Fechaduras Digitais</div>
            </div>
            <div class="one-box">
                <img src={encanador} alt="foto encanador arrumando o banheiro" />
                <div class="title-box">Encanador</div>
            </div>
            </div>        
        </div>
        <div class="secund-range">
            <div class="secund-box">
                <div class="secund-header">
                    <img src={monitoramento} alt="logo da camera" />
                    <h3 className='hh3'> Monitoramento 24 horas</h3>
                </div>
                <div class="description">O monitoramento 24 horas reafirma nosso foco de garantir a proteção do seu patrimônio à todo momento.</div>
            </div>

            <div class="secund-box">
                <div class="secund-header">
                    <img src={pesssoas} alt="imagem de pessoas" />
                    <h3 className='hh3'>profissionais Experientes</h3>
                </div>
                <div class="description">Mão de obra especializada no mercado de segurança na capital de SP, tornando a SRN umas das referência segura.</div>
            </div>

            <div class="secund-box">
                <div class="secund-header">
                    <img src={calculadora} alt="logo da calculadora" />
                    <h3 className='hh3'>Valor Justos & acesíveis </h3>
                </div>
                <div class="description">Nosso foco é proporcionar a sua segurança por um valor acessível e justo. Garantindo os melhores valores. </div>
            </div>
        </div>        
        <Footer />
        </div>
    )
}