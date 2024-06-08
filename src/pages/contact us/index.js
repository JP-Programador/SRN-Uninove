import Footer from "../../components/footer";
import Header from "../../components/header";

import './index.css'



export default function Contact () {
    return (
        <div className="containerCt">
            <Header />
        
        <div class="container-contact">
        <img src="https://redfit.com.br/assets/img/contato-page.png?1" alt="placa fale conosco" />
        <form>
                <h3>Preencha o formulário</h3>
                <div class="boxname">
                    <div class="name">
                        <label>Nome:</label>
                        <input type="text" name="nome" placeholder="Digite seu Primeiro Nome" required />
                    </div>
                    <div class="name">
                        <label>Sobrenome:</label>
                        <input type="text" name="nome" placeholder="Digite seu sobrenome" required />
                    </div>
                </div>
                <label>Email:</label>
                <input type="email" name="email" id="" placeholder="Digite seu email" required />
                <label>Mensagem:</label>
                <textarea id="en" placeholder="Digite sua mensagem" required></textarea>
                <input type="submit" id="enviar" onclick="Ir()" />
        </form>
             </div>    
             <Footer />
        </div>
    )
}