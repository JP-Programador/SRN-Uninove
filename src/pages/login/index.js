import './index.css'
import logo from '../../assets/logo.png'
export default function Login () {

    return (
        <div className="container">
            <div class="container">
        <div class="box1">
            <div class="box-form">
                <h1>PORTAL DO CLIENTE</h1>
                <form name="form" method="post">
                    <label for="email">Email:</label><br></br>
                    <input type="email" name="email" id="email" placeholder="Digite seu email"  required /> <br></br><br></br>
                    <label for="senha">Senha:</label><br></br>
                    <input type="password" name="senha" id="senha" placeholder="Digite sua Senha" required/> <br></br><br></br>
                    <input type="submit" name="acessar" id="acessar" value="acessar" onclick="Acessar(senha.value, email.value)"/>
                </form>
                <div id="slider">
                    <div class="selected">Prevenção é a primeira linha de defesa!</div>
                    <div>Você confia na segurança da sua casa?</div>
                    <div>Investir em segurança é ter qualidade de vida!</div>
                    <div>Antes prevenção que prejuizo!</div>
                </div>
            </div>
        </div>
        <div class="box2"> <img src={logo} alt="logo da empresa" /></div>
        </div>
        </div>
    )
}