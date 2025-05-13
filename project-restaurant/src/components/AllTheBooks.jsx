import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

class AllTheBooks extends Component {
  state = {
    books: null,
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            {fantasy.slice(0, 20).map((item, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="my-4 ">
                <Card style={{ height: "100%", width: "80%" }}>
                  <Card.Img
                    variant="top"
                    src={item.img}
                    height={250}
                    style={{ objectFit: "contain" }}
                  />
                  <Card.Body
                    className="d-flex flex-column justify-content-between"
                    style={{ padding: "1.5rem" }}
                  >
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">{item.price}€</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
