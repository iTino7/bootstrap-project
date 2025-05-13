import { Alert, Container } from "react-bootstrap";

function Welcome() {
  return (
    <>
      <Container>
        <Alert variant="primary" className="text-center fs-4 mt-3">
           Libri Fantasy 🧙‍♂️
        </Alert>
      </Container>
    </>
  );
}

export default Welcome;
