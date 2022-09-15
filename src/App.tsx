import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home }  from "./pages/Home";
import { Store }  from "./pages/Store";
import { About }  from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import backgroundImage1 from "../public/images/Lego_Background_1.jpg"
import "./App.css"

function App() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage1})`, height: "100vh", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", overflow: "auto" }}>
    <ShoppingCartProvider>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
</ShoppingCartProvider>
    </div>
  )
}

export default App
