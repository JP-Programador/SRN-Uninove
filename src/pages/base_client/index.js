import "./index.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Ouro from "../../assets/ouro.svg"
import Ver from "../../assets/verificado.png"

import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
export default function Client() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="containerBA">
      <Header />
      <main>
        <h1 id="ba"> Cadastrar-se</h1>
        <div class="base-plan">
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h4 class="offcanvas-title" id="offcanvasRightLabel">
                PLANO SELECIONADO:
              </h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div class="select-plan">
                <img
                  src={Ouro}
                  height="170"
                  alt=""
                />
                <h4>Plano Prata</h4>
              </div>
              <div class="box-benefits">
                <h5 style={{color:'red'}}>Nossos Serviços:</h5>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    
                    alt=""
                  />{" "}
                  <span>Monitoramento 24Hrs</span>{" "}
                </div>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    
                    alt=""
                  />{" "}
                  <span>Fechaduras Eletrônicas</span>{" "}
                </div>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    alt=""
                  />{" "}
                  <span>Apólice de riscos nomeados</span>{" "}
                </div>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    alt=""
                  />{" "}
                  <span>Incêndios, queda de raios e explosão</span>{" "}
                </div>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    alt=""
                  />{" "}
                  <span>Desastres Naturais</span>{" "}
                </div>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    alt=""
                  />{" "}
                  <span>Furto, extorsão e roubo de bens</span>{" "}
                </div>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    alt=""
                  />{" "}
                  <span>Impacto de veículos e quedas de Aeronave</span>{" "}
                </div>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    alt=""
                  />{" "}
                  <span>Quebra de vidros e espelhos</span>{" "}
                </div>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    alt=""
                  />{" "}
                  <span>reparos domésticos</span>{" "}
                </div>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    alt=""
                  />{" "}
                  <span>Serviços para computadores</span>{" "}
                </div>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    alt=""
                  />{" "}
                  <span>Tumulto, greve e lock-out</span>{" "}
                </div>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    alt=""
                  />{" "}
                  <span>Cercas Elétricas</span>{" "}
                </div>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    alt=""
                  />{" "}
                  <span>Danos Elétricos</span>{" "}
                </div>
                <div class="benefits">
                  {" "}
                  <img
                    src={Ver}
                    height="20"
                    alt=""
                  />{" "}
                  <span>Vendaval, furacão, ciclone, tornado e granizo</span>{" "}
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="base-client">
          <form>
            <div class="base-1">
              <h2 className="h2b">Dados do Cliente</h2>

              <div class="base-box">
                <div class="ipt">
                  <label>Nome Completo:</label> <input type="text" />
                </div>
                <div class="ipt">
                  <label>CPF:</label> <input type="" />
                </div>
              </div>

              <div class="base-box">
                <div class="ipt">
                  <label>Data de Nascimento:</label> <input type="" />
                </div>
                <div class="ipt">
                  <label>Telefone:</label> <input type="" />
                </div>
              </div>

              <div class="base-box">
                <div class="ipt">
                  <label>Gênero:</label> <input type="" />
                </div>
                <div class="ipt">
                  <label>Endereço de Email:</label> <input type="" />
                </div>
              </div>

              <div class="base-box">
                <div class="ipt">
                  <label>Senha:</label> <input type="" />
                </div>
                <div class="ipt">
                  <label>Repetir Senha:</label> <input type="" />
                </div>
              </div>
            </div>

            <div class="base-2">
              <h2 className="h2b">Informações dos membros da família: (Máximo 5 pessoas) </h2>

              <div class="base-box">
                <div class="ipt">
                  <label>Nome Completo:</label> <input type="text" />
                </div>
                <div class="ipt">
                  <label>Idade</label> <input type="" />
                </div>
              </div>
              <div class="base-box">
                <div class="ipt">
                  <label>Nome Completo:</label> <input type="text" />
                </div>
                <div class="ipt">
                  <label>Idade</label> <input type="" />
                </div>
              </div>
              <div class="base-box">
                <div class="ipt">
                  <label>Nome Completo:</label> <input type="text" />
                </div>
                <div class="ipt">
                  <label>Idade</label> <input type="" />
                </div>
              </div>
              <div class="base-box">
                <div class="ipt">
                  <label>Nome Completo:</label> <input type="text" />
                </div>
                <div class="ipt">
                  <label>Idade</label> <input type="" />
                </div>
              </div>
              <div class="base-box">
                <div class="ipt">
                  <label>Nome Completo:</label> <input type="text" />
                </div>
                <div class="ipt">
                  <label>Idade</label> <input type="" />
                </div>
              </div>
            </div>

            <div class="base-3">
              <h2 className="h2b">Informações da Propriedade</h2>

              <div class="base-box">
                <div class="ipt">
                  <label>Tipo de Propriedade:</label> <input type="text" />
                </div>
                <div class="ipt">
                  <label>Quantidade de cômodos:</label> <input type="" />
                </div>
              </div>

              <div class="base-box">
                <div class="ipt">
                  <label>Numeros de Andares (Opcional):</label>{" "}
                  <input type="" />
                </div>
                <div class="ipt">
                  <label>Endereço:</label> <input type="" />
                </div>
              </div>

              <div class="base-box">
                <div class="ipt">
                  <label>Número:</label> <input type="" />
                </div>
                <div class="ipt">
                  <label>Bairro:</label> <input type="" />
                </div>
              </div>

              <div class="base-box">
                <div class="ipt">
                  <label>Complemento (Opcional):</label> <input type="" />
                </div>
                <div class="ipt">
                  <label>Estado:</label> <input type="" />
                </div>
              </div>

              <div class="base-box">
                <div class="ipt">
                  <label>Cidade:</label> <input type="" />
                </div>
                <div class="ipt">
                  <label>CEP:</label> <input type="" />
                </div>
              </div>
            </div>

            <div class="base-4">
              <h2 className="h2b">Preferências de Instalação</h2>

              <div class="base-box">
                <div class="ipt">
                  <label>Data:</label> <input type="text" />
                </div>
                <div class="ipt">
                  <label>Horário:</label> <input type="" />
                </div>
              </div>
            </div>

            <div class="base-4">
              <h2 className="h2b">Preferências de Notificações:</h2>

              <div class="box-check">
                <label>Telefone</label>
                <input type="checkbox" />
                <label>SMS</label>
                <input type="checkbox" />
                <label>E-mail</label>
                <input type="checkbox" />
                <label>Notificação WhatsApp</label>
                <input type="checkbox" />
              </div>

              <h4 className="h4b">Contatos Autorizados (Maxímo 3 pessoas)</h4>
              <div class="base-4pt2">
                <div class="base-box">
                  <div class="ipt31">
                    <label>Nome:</label> <input type="text" />
                  </div>
                  <div class="ipt31">
                    <label>telefone:</label> <input type="" />
                  </div>
                  <div class="ipt31">
                    <label>Email:</label> <input type="" />
                  </div>
                </div>
                <div class="base-box">
                  <div class="ipt31">
                    <label>Nome:</label> <input type="text" />
                  </div>
                  <div class="ipt31">
                    <label>telefone:</label> <input type="" />
                  </div>
                  <div class="ipt31">
                    <label>Email:</label> <input type="" />
                  </div>
                </div>
                <div class="base-box">
                  <div class="ipt31">
                    <label>Nome:</label> <input type="text" />
                  </div>
                  <div class="ipt31">
                    <label>telefone:</label> <input type="" />
                  </div>
                  <div class="ipt31">
                    <label>Email:</label> <input type="" />
                  </div>
                </div>
              </div>
            </div>

            <div class="base-5">
              <h2 className="h2b">Informações Adicionais:</h2>
              <textarea placeholder="Outras informações específicas que podem ser relevantes para a configuração do sistema de segurança, como a presença de animais de estimação.">
                {" "}
              </textarea>
            </div>
            <div class="base-6">
              <h2>Aprovações e Autorizações</h2>
              <div class="ipt11">
                <input type="checkbox" />
                <span>
                  Estou autorizando a instalação e operação do sistema de
                  segurança na minha residência. Tenho consentimento <br /> da
                  coleta e processamento de dados pessoais, se necessário para o
                  sistema.
                </span>
              </div>
            </div>
          </form>
         <button id="" variant="primary" onClick={handleShow}>Cadastrar</button>
        </div>
        <button class="btn btn-primary" id="btn2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Visualizar Plano Selecionado</button>
      </main>
      <Footer />

      <div className="ContainerModal">
      <Modal show={show} onHide={handleClose} id="modals">
        <Modal.Header closeButton>
          <Modal.Title>Termo de Contrato!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <embed src="https://docs.google.com/document/d/1rkrtSpLpGMc9oFfxNC8Ynw2HXqBwdWGK/edit?usp=sharing&ouid=111065481512841555327&rtpof=true&sd=true" width="1150" height="575"/> 
        </Modal.Body>
        <Modal.Footer>
          <Link  to={"/Pagamento"}>
            {" "}
            <Button id="con" variant="primary" onClick={handleClose}>
              Concordo{" "}
            </Button>{" "}
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
}
