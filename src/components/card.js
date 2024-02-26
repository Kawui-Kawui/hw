import Card from "react-bootstrap/Card";
function ImageAndTextExample() {
  return (
    <Card>
      <Card.Img variant="top" src="https://lambdatres.com/wp-content/uploads/2022/12/Art_Ofipequena_870x400.jpg" />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ImageAndTextExample;
