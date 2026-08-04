import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";


function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}


function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />

        <Route 
          path="/terms" 
          element={<Terms />} 
        />

        <Route 
          path="/privacy" 
          element={<Privacy />} 
        />

      </Routes>


      <Footer />

    </>
  );
}


export default App;