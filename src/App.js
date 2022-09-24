import Header from "./Header";
import Home from './Home'
import Footer from './Footer';
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from './Resume';
import Contact from './Contact'
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
    <Route path="/resume" element={<Resume />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
