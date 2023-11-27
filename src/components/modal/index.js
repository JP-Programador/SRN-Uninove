import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./index.css";
import { Link } from "react-router-dom";

function Modalss() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="Container">
     <Button id="fin1" variant="primary" onClick={handleShow}>
        FINALIZAR PEDIDO
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Parabéns pedido Finalizado!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Parabéns, seu pedido foi concluído com sucesso, agora é só desfrutar
          do nosso plano assim que precisar, estamos aqui para atender-los da
          melhor forma possivél.
          <br></br>{" "}
          <div id="a1">
            {" "}
            Caso queira olhar a tela do seu pedido com os benefícios, só cliclar
            em acessar meus pedidos.
          </div>{" "}
        </Modal.Body>
        <Modal.Footer>
            {" "}
            <Link to="/">
            <Button class="mod" variant="secondary" onClick={handleClose}>
              FECHAR
            </Button>{" "}</Link>
          

            <Link to="/Login">   <Button class="mod" variant="primary" onClick={handleClose}>
              ACESSAR MEU PEDIDO{" "}
            </Button>   </Link>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modalss;
