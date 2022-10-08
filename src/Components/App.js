import Header from "../Components/Header";
import Home from '../Components/Home'
import Footer from '../Components/Footer';
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Contact from '../Components/Contact'
import "./App.css"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
