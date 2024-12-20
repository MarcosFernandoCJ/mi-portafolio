import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <div className="px-6 lg:px-96">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
