import './index.css'
import { Link } from "react-router-dom"

import Footer from "../../components/footer";
import Header from "../../components/header";

import Bron from '../../assets/bronze.svg'
import Our from '../../assets/ouro.svg'
import Prat from '../../assets/prata.svg'

import Cor from '../../assets/correto.png'

export default function Plans () {
    return (
        <div className="containerplans1">
            <Header />
         <div class="container-plans">
        <div class="boxs-plans">
            <img src={Bron} alt=''/>
            <div class="fil-box">
                <h1>Plano Bronze</h1>
                <div class="boxs-texts">
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> Apólice de riscos nomeados</span></div>
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> Incêndios, queda de raios e explosão </span></div>
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> Desastres Naturais</span></div>
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /><span> Furto, extorsão e roubo de bens </span></div>
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /><span> Monitoramento 24Hrs</span></div>
                    <button className='cot'> <Link to="/Cadastro"> COTAR AGORA</Link></button>
                </div>
            </div>
        </div>

        <div class="boxs-plans2">
            <img src={Our} alt=''/>
            <div class="fil-box">
                <h1>Plano Ouro</h1>
                <div class="boxs-texts">
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> Plano Prata & Bronze </span></div>
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> Impacto de veículos e quedas de Aeronave </span></div>
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> Quebra de vidros e espelhos</span></div>
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> reparos domésticos</span></div>
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> Serviços para computadores</span></div>
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> Tumulto, greve e lock-out</span></div>
                    <button className='cot'> <Link to="/Cadastro"> COTAR AGORA</Link></button>
                </div>
            </div>
        </div>

        <div class="boxs-plans">
            <img src={Prat} alt=''/>
            <div class="fil-box">
                <h1>Plano Prata</h1>
                <div class="boxs-texts">
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> Plano Bronze </span></div>
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> Cercas Elétricas  </span></div>
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> Danos Elétricos</span></div>
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> Fechaduras Eletrônicas </span></div>
                    <div class="minis-box"><img src={Cor} alt="Simbolo de correto" /> <span> Vendaval, furacão, ciclone, tornado e granizo </span></div>                   
                    <button className='cot'> <Link to="/Cadastro"> COTAR AGORA</Link></button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
        </div>
    )
}   