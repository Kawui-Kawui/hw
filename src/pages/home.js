import "../App.css";
import React from "react";
import Cards from "../components/card";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div className="container">
        <Cards />
        <h1>Inicio de pagina</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in
          dicta aspernatur. Quisquam consequuntur, tempore veniam facilis iste
          aspernatur repellendus iusto porro perspiciatis exercitationem
          molestias suscipit minus vero eum commodi adipisci dolor dicta, ut
          esse similique pariatur obcaecati? Ducimus impedit pariatur tempore
          explicabo expedita. Expedita pariatur illum itaque odit harum ullam
          magnam sint esse! Mollitia repellat quidem, aliquid praesentium
          facilis, hic alias error aperiam placeat molestias earum facere,
          distinctio nam exercitationem laboriosam. Possimus voluptatibus itaque
        </p>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="https://www.gaudi.com.mx/wp-content/uploads/2020/07/RS-500-Requiez-Silla-Para-Oficina-Gaudi-Muebles-2.png" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <NavLink to='/product'>Ver producto</NavLink>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;
