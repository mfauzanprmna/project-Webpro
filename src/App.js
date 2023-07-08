import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './template/navbar';
import Footer from './template/footer';
import Artikel from './component/artikel';
import Contact from './component/contact';
import Home from './component/home';
import Organization from './component/organization';
import ViewArtikel from './component/artikel-view';

function App() {
  return (
    <>
      <Navbar />
        <div className='-z-10'>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/artikel" element={ <Artikel />} />
            <Route path="/contact" element={ <Contact />} />
            <Route path="/organization" element={ <Organization />} />
            <Route path="/artikel-view" element={ <ViewArtikel />} />
          </Routes>
        </div>
      <Footer />
    </>
  );
}

export default App;
