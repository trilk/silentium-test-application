import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Main from "./components/Main";

function App() {
  return (
    <Container className="p-3">
      <Main />
    </Container>
  );
}

export default App;
