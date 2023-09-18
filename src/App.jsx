import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Venue from "./Components/Venue";
import Prizes from "./Components/Prizes";
import Counter from "./Components/Counter";
import About from "./Components/About";
import Videos from "./Components/Videos";
import Photos from "./Components/Photos";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Form from "./Components/Form";



function LandingPage() {
  return (
    <div>
      <Navbar />
      <Home />
      
      <Venue />
      <Prizes />
      <Counter />
      <About />
      <Videos />
      <Photos />
      <Faq />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;