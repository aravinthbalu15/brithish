import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import OurParish from "./components/OurParish";
import Anbiyangal from "./components/Anbiyangal";
import Gallery from "./components/Gallery";
import SpecialGallery from "./components/Videos";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourparish" element={<OurParish />} />
        <Route path="/anbiyangal" element={<Anbiyangal />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/special-gallery" element={<SpecialGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
