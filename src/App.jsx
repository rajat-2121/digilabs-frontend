import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Footer from "./Footer"

function App() {
  const [count, setCount] = useState(0);

  return (
    
      <div className="main">
        <Navbar />
        <Homepage />
        <Footer/>
      </div>
    
  );
}

export default App;
