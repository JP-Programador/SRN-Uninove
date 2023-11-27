import './fot.css'


import Logo from '../../assets/logo.png'
import Face from '../../assets/facebook.png'
import Twi from '../../assets/twitter.png'
import Inst from '../../assets/instagram.png'

export default function Footer() {
    return (
        <div className="contaierFooter">
             <div class="log-footer"><img src={Logo} alt="logo da empresa" /></div>
        <div class="box-footer">
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5511999898999"> <button id='foter'> Entre em Contato  </button></a>
            <h6 id='fo'>Email: <br/> srnsegurancaresidencial@gmail.com</h6>
            <div class="end">Endereço:</div>
            <span id="footer">Avenida Carlos Klein, Nº 2340 - Socorro, São Paulo - SP            </span>
        </div>
        <div class="sociais"> 
            <div class="title-soc">Redes Sociais</div>
            <div class="sub-so">Curta e siga a SRN nas redes sociais</div>
            <div class="log-soc">
                <img src={Face} alt="logo do facebook"/>
                <img src={Twi} alt="logo do twitter"/>
                <img src={Inst} alt="logo do instagram"/>
            </div>
        </div>
        </div>
    )
}