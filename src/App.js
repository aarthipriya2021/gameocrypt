import React, { useEffect } from 'react';
import "./index.css";
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Designs from './components/Designs';
import Buysell from './components/Buysell';
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import scrollreveal from "scrollreveal";

const App = () => {

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        #home,
        #buySell1,
        #buySell2,
        #buySell3,
        #blogs,
        footer
        `,
        { 
          opacity: 0,
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, [])

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Designs />
      <Buysell />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App;