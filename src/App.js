import { useEffect, useState } from "react";
import "./App.css";
import MYNAV from "./Components/mynav/MYNAV.js";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <div>
      <MYNAV scroll={scroll}/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
