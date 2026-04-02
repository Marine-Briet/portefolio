import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import LegalNotice from './pages/LegalNotice.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legalNotice" element={<LegalNotice />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;