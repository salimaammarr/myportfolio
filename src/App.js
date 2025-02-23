import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="snap-container position-relative">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Navbar />
      </div>
    </BrowserRouter>
  );
}
export default App;
