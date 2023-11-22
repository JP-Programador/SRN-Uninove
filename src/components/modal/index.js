import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./index.css";

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
            no botão abaixo.
          </div>{" "}
        </Modal.Body>
        <Modal.Footer>
          <a href="../../pages/home">
            {" "}
            <Button variant="secondary" onClick={handleClose}>
              FECHAR
            </Button>{" "}
          </a>
          <a href="../../pages/my_plans">
            {" "}
            <Button variant="primary" onClick={handleClose}>
              ACESSAR MEU PEDIDO{" "}
            </Button>{" "}
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modalss;
