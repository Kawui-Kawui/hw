import "../App.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Product() {
  return (
    <div className="container">
      <Container>
        <Row>
          <Col xs={6}>
            <Image
              src="https://www.gaudi.com.mx/wp-content/uploads/2020/07/RS-500-Requiez-Silla-Para-Oficina-Gaudi-Muebles-2.png"
              roundedCircle
            />
          </Col>
          <Col>
            <Card>
              <Card.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                in dicta aspernatur. Quisquam consequuntur, tempore veniam
                facilis iste aspernatur repellendus iusto porro perspiciatis
                exercitationem molestias suscipit minus vero eum commodi
                adipisci dolor dicta, ut esse similique pariatur obcaecati?
                Ducimus impedit pariatur tempore explicabo expedita. Expedita
                pariatur illum itaque odit harum ullam magnam sint esse!
                Mollitia repellat quidem, aliquid praesentium facilis, hic alias
                error aperiam placeat molestias earum facere, distinctio nam
                exercitationem laboriosam. Possimus voluptatibus itaque
                <Card>Precio: 200$</Card>
              </Card.Body>
              <Button variant="warning">Compar</Button>{" "}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
