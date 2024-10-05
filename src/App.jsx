import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./components/Gallery";
import People from "./components/People";
import Food from "./components/Food";
import Nature from "./components/Nature";
import { Layout } from "./Layout";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="overflow-x-hidden">
        <Router>
          <Routes>
            {/* Wrapping all routes with the Layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio/gallery" element={<Gallery />} />
              <Route path="/portfolio/people" element={<People />} />
              <Route path="/portfolio/food" element={<Food />} />
              <Route path="/portfolio/nature" element={<Nature />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
