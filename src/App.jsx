import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import {Home} from "./pages/Home"
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Routes, Route } from "react-router-dom"; 

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);
  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
