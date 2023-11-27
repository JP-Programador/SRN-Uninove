import "./index.css";

import Footer from "../../components/footer";
import Header from "../../components/header";
import Pix from "../../assets/Logo—pix.png";
import Cart from "../../assets/Group 2.png";
import Qr from "../../assets/qrcode-pix.png";
import Modalss from '../../components/modal'


export default function Payment() {

  async function MostrarCard() {
    var btn = document.querySelector("#show");
    var btn1 = document.querySelector("#show1");
    var card = document.querySelector(".box-card");
    var pix = document.querySelector(".box-pix");

    btn.addEventListener("click", function () {
      if (card.style.display === "block") {
        card.style.display = "none";
        btn.style.backgroundColor = "white";
        btn1.style.backgroundColor = "white";
      } else {
        card.style.display = "block";
        pix.style.display = "none";
        btn.style.backgroundColor = "rgb(60, 110, 180)";
      }
    });
  }

async function MostrarPix() { 
  var btn = document.querySelector("#show");
  var btn1 = document.querySelector("#show1");
  var card = document.querySelector(".box-card");
  var pix = document.querySelector(".box-pix");
    btn1.addEventListener("click", function () {
      if (pix.style.display === "block") {
        pix.style.display = "none";
        btn.style.backgroundColor = "white";
        btn1.style.backgroundColor = "white";
      } else {
        pix.style.display = "block";
        card.style.display = "none";
        btn1.style.backgroundColor = "rgb(60, 110, 180)";
      }
    });
  }


  
 function Copiar() {
    document.getElementById("copiar").addEventListener("click", function () {
      document.getElementById("codigo").select();

      document.execCommand('copy');
      alert('Código Pix copiado, com sucesso  !');
    });

  }
  var meses = ["janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "NOVEMBRO", "Dezembro"];
  let d = new Date();
  let dia = d.getDate();
  let x = d.getMonth();
  let mes = meses[x];
  return (
      <div className="container11">
            <Header />

      <div className="container21">
      <div className="part1">
      <h1 className="tip">CONFIRMAÇÃO DO PEDIDO:</h1>
        <div class="dados">
          <div class="input1">
            <div class="ipt">
              <label>Nome Completo:</label> <input type="text" value={"Nome Teste"} />
            </div>
            <div class="ipt">
              <label>CPF:</label> <input type=""value={"999.999.999-99"}/>
            </div>
          </div>

          <div class="input1">
            <div class="ipt">
              <label>Telefone:</label> <input type="text" value={"11 99999-9999"} />
            </div>
            <div class="ipt">
              <label>Endereço de Email:</label> <input type="" value={"emailteste@gmail.com"}/>
            </div>
          </div>

          <div class="input1">
            <div class="ipt">
              <label>Endereço da Propriedade:</label> <input type="text" value={"Avenida Carlos Klein, Nº 2340 - Socorro, São Paulo - SP"}/>
            </div>
            <div class="ipt">
              <label>Nº:</label> <input type="" value={"99"}  />
            </div>
          </div>

          <div class="base-4">
            <h5 className="tip" style={{margin: '20px 0px 10px 90px'}}>Preferências de Instalação:</h5>

            <div class="input1">
              <div class="ipt">
                <label>Data:</label> <input type="text" value={"00/00/0000"} />
              </div>
              <div class="ipt">
                <label>Horário:</label> <input type="" value={"00:00"} />
              </div>
            </div>
          </div>
        </div>
        <div className="payment" id="myGroup">
          <div className="groupBut">
            <h5 className="tip">SELECIONA MÉTODO DE PAGAMENTO:</h5>
            <button id="show" onClick={MostrarCard}>
              <img src={Cart} alt="" width={"150px"} />
            </button>
            <button id="show1" onClick={MostrarPix}>
              <img src={Pix} alt="" width={"122px"} />{" "}
            </button>
          </div>
          <div className="box-card">
            <div class="input1">
              <div class="ipt">
                <label>Numero do Cartão:</label> <input type="text" />
              </div>
              <div class="ipt">
                <label>Bandeira:</label>{" "}
                <select name="cars" id="cart" form="carform">
                <option value="volvo">Escolher Bandeira</option>
                  <option value="volvo">MasterCard</option>
                  <option value="saab">Visa</option>
                  <option value="opel">American Express</option>
                  <option value="audi">Cielo</option>
                </select>

              </div>
            </div>

            <div class="input1">
              <div class="ipt">
                <label>Nome (Como está no cartão):</label> <input type="text" />
              </div>
              <div class="ipt">
                <label>CPF / CNPJ do proprieário do cartão::</label>{" "}
                <input type="" />
              </div>
            </div>

            <h6 className="venb">Vencimento:</h6>
            <div class="input1">
              <div class="ipt">
                <label>Mês:</label> <input type="text" id="carM" />
              </div>
              <div class="ipt">
                <label>Ano (Quatro digítos):</label> <input type="" id="carD" />
              </div>
              <div class="ipt">
                <label>Código de Segurança:</label> <input type="" id="carC" />
              </div>
            </div>
            <div className="parcel">
              <label>Parcelado em:</label>
              <select name="cars" id="cars">
                  <option value="1x">Quantidade de Parcelas</option>
                  <option value="2x">1 x R$ 800,00</option>
                  <option value="3x">2 x R$ 400,00</option>
                  <option value="3x">3 x R$ 266,66</option>
                  <option value="6x">4 x R$ 200,00</option>
                  <option value="6x">5 x R$ 160,00</option>
                  <option value="6x">6 x R$ 133,33</option>
              </select>
            </div>
          </div>
          <div className="box-pix">
            <div className="pix1">
              <div className="qrcode">
                <img src={Qr} alt="qrcode" width={"270px"}></img>
              </div>
              <div className="qr-text">
                <button id="copiar" onClick={Copiar}>
                  Copiar código PIX
                </button>
                <h5 className="h5pix">PAGAR COM O PIX É FÁCIL E RÁPIDO</h5>
                <span>
                  Abra seu aplicativo bancário e escaneie o QRCode, para
                  prosseguir com o pagamento ou copie <br></br> o código Pix atráves do
                  botão acima, abra seu aplicativo bancário na opção PIX copia e
                  cola, <br></br> cole-o e prossiga com o pagamento.
                </span>
              </div>
            </div>
            <textarea
              type="text"
              id="codigo"
              value="00020126360014BR.GOV.BCB.PIX0114+55119338783775204000053039865802BR5904Joao6009Sao Paulo62180514SrnResidencial6304FA10"
            />
          </div>
          <div className="box-bolet">boleto tAMBM</div>
        </div>
      </div>
      <div className="part2">
        <div className="plan-select">
          <h4 className="h4p">PLANO SELECIONADO:</h4>
          <div className="plan-obs">
            <h5>Plano Ouro</h5>
            <span>(Comtempla 12 beneficios)</span>
            <h6>R$ 800,00 (Anual)</h6>
          </div>
          <div class="ipt1">
            <input type="checkbox" id="check" />
            <span>Habilitar renovação automaticamente.</span>
          </div>
          <div className="period">
            PERÍODO VIGENTE: {dia} DE {mes} 2023 ATÈ {dia} DE {mes} 2024
          </div>
        </div>

        <Modalss id="fin1"/>
      </div>
    </div>
    <Footer />
    </div>
  );
}
