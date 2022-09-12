import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home }  from "./pages/Home";
import { Store }  from "./pages/Store";
import { About }  from "./pages/About";
import { Navbar } from "./components/Navbar";
import "./App.css"
import image from "../public/images/Lego_Background_1.jpg"

function App() {
  return (
    
    <div className="bg">
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
</div>
    
  )
}

export default App
