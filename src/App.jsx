import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Venue from "./Components/Venue";
import Prizes from "./Components/Prizes";
import Counter from "./Components/Counter";
import About from "./Components/About";



function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <Counter />
     <About />
     <Venue />
     <Prizes />
 
    </div>
  );
}

export default App;
