import { Button, Container } from "react-bootstrap";

function MyFooter() {
  return (
    <div>
      <Container fluid className="m-0 bg-dark py-4">
        <Container className="text-center">
          <Button className="btn btn-danger me-2"> ⚠️ Libri Horror </Button>
          <Button className="btn btn-danger"> 👽 Libri Sci-Fi </Button>
        </Container>
      </Container>
    </div>
  );
}

export default MyFooter;
