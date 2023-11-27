import './index.css'
import logo from '../../assets/logo.png'
import { useState } from "react"

import Footer from "../../components/footer";
import Header from "../../components/header";
import { Link } from 'react-router-dom';
export default function Login () {
    const[ email, setEmail] = useState ('');
    const[ senha, setSenha] = useState ('');


    return (
        <div className="containerlog">
        <Header />
        <div className="container1">

        <div class="box1">
            <div class="box-form">
                <h1 id='cli'>PORTAL DO CLIENTE</h1>
                <form name="form" method='post' >
                    <label for="email">Email:</label><br></br>
                    <input type="email" name="email" value={email}  id="email" placeholder="Digite seu email" onChange = {e => setEmail(e.target.value)} required /> <br></br><br></br>
                    <label for="senha">Senha:</label><br></br>
                    <input type="password" name="senha" id="senha" value = {senha} placeholder="Digite sua Senha" onChange = {e => setSenha(e.target.value)} required/> <br></br><br></br>
                 <Link to={"/Meu Plano"}>  <input type='button' name="acessar" id="acessar" value={"Entrar"}/></Link>
                </form>
                <div id="slider">
                    <div class="selected">Prevenção é a primeira linha de defesa!</div>
                </div>
            </div>
        </div>
        <div class="box2"> <img src={logo} alt="logo da empresa" /></div>
        </div>

        <Footer />
        </div>
    )
}