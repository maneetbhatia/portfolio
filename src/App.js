import Header from "./Header";
import Footer from './Footer';
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from './Resume';

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
    <Route path="/" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/resume" element={<Resume />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
