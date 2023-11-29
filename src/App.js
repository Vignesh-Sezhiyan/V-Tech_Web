import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Trial from "./components/Trial";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact1" element={<Trial />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
