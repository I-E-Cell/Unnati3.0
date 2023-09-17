import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Venue from "./Components/Venue";
import Prizes from "./Components/Prizes";
import Counter from "./Components/Counter";
import About from "./Components/About";
import Videos from "./Components/Videos";
import Photos from "./Components/Photos";




function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <Counter />
     <About />
     <Venue />
     <Prizes />
     <Videos />
     <Photos />
     
 
    </div>
  );
}

export default App;
