import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <span style={{ color: "#cc00ff" }}>s</span>
                  <span style={{ color: "#77dee6", fontSize: "1.5rem" }}>
                    h
                  </span>
                  <span style={{ color: "#f5072b" }}>o</span>
                  <span style={{ color: "#ffffff", fontSize: "1.5rem" }}>
                    p
                  </span>
                  <span style={{ color: "#ffff00" }}>e</span>
                  <span style={{ color: "#1aff00" }}>r</span>
                </Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/Products/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
