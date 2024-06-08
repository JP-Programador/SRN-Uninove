import './index.css'
import Footer from "../../components/footer";
import Header from "../../components/header";
import Ouro from '../../assets/ouro.svg'
import Danos from '../../assets/Danos Elétricos.jpg'
import Desastres from '../../assets/Desastres Naturais.jpg'
import Tumulto from '../../assets/tumulto.jpg'
import Incêndios from '../../assets/Incêndios.jpg'
import Vidros from '../../assets/Quebra de vidros.jpeg'
import Raios from '../../assets/Queda de raios.jpg'
import Reparos from '../../assets/Reparos.jpg'
import Roubo from '../../assets/Roubo de bens.jpg'
import Serviços from '../../assets/computadores.png'

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { Link } from 'react-router-dom';

export default function MyPlans () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var meses = ["janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "NOVEMBRO", "Dezembro"];
  let d = new Date();
  let dia = d.getDate();
  let x = d.getMonth();
  let mes = meses[x];
  
  function Cancelado() {
    alert("Plano Cancelado");

  }

  return (

    <div className="containerMy">
      <Header />
      <div class="titles-plans">
        <h1 className='my'>Meu Plano</h1>
        <h4 id='my'>PERÍODO VIGENTE: {dia} DE {mes} 2023 ATÈ {dia} DE {mes} 2024</h4>
      </div>
    <div class="logo-plans"> <img src={Ouro} alt='' width={'800px'}/> </div>
    <div class="row row-cols-1 row-cols-md-3">
 

    <div class="col mb-4">
      <div class="card h-100">
        <img src={Danos} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Danos Elétricos</h5>
          <button onClick={handleShow}>Acionar Seguro</button>
        </div>
      </div>
    </div>

    <div class="col mb-4">
      <div class="card h-100">
        <img src={Desastres} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Desastres Naturais</h5>
          <button onClick={handleShow}>Acionar Seguro</button>
        </div>
      </div>
    </div>

    <div class="col mb-4">
      <div class="card h-100">
        <img src={Tumulto} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Tumulto, greve e lock-out</h5>
          <button onClick={handleShow}>Acionar Seguro</button>
        </div>
      </div>
    </div>

    <div class="col mb-4">
      <div class="card h-100">
        <img src={Incêndios} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Incêndios</h5>
          <button onClick={handleShow}>Acionar Seguro</button>
        </div>
      </div>
    </div>

    <div class="col mb-4">
      <div class="card h-100">
        <img src={Vidros} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Quebra de Vidros</h5>
          <button onClick={handleShow}>Acionar Seguro</button>
        </div>
      </div>
    </div>

    <div class="col mb-4">
      <div class="card h-100">
        <img src={Raios} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Raios</h5>
          <button onClick={handleShow}>Acionar Seguro</button>
        </div>
      </div>
    </div>

    <div class="col mb-4">
      <div class="card h-100">
        <img src={Reparos} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Reparos Domésticos</h5>
          <button onClick={handleShow}>Acionar Seguro</button>
        </div>
      </div>
    </div>

    <div class="col mb-4">
      <div class="card h-100">
        <img src={Roubo} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Roubo de bens</h5>
          <button onClick={handleShow}>Acionar Seguro</button>
        </div>
      </div>
    </div>

    <div class="col mb-4">
      <div class="card h-100">
        <img src={Serviços} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Serviços para computadores</h5>
          <button onClick={handleShow}>Acionar Seguro</button>
        </div>
      </div>
    </div>


    </div>
    <button className='cancel' onClick={Cancelado} >     <Link  to={"/Login  "}>
Cancelar Assinatura </Link></button>


    <Modal show={show} onHide={handleClose} id="modals">
        <Modal.Header closeButton>
          <Modal.Title>Seguro Acionado!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Já enviamos seus dados para nossa central, juntamente com o serviço selecionado. Entraremos em contato nos próximos 2min, enquanto uma equipe estará deslocando para a sua residência. <br></br> Muito Obrigado, por contar conosco.        </Modal.Body>
        <Modal.Footer>
          <Link  to={"/Meu Plano"}>
            {" "}
            <Button id="con" variant="primary" onClick={handleClose}>
              Fechar{" "}
            </Button>{" "}
          </Link>
        </Modal.Footer>
        
      </Modal>
    <Footer />
  </div>
  )
}
