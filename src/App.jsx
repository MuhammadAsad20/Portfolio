import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
       <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
