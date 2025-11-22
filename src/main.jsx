import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from "./landingPage/home/home";
import About from "./landingPage/about/about";
import Pricing from "./landingPage/pricing/pricing";
import Products from "./landingPage/products/products";
import Signup from "./landingPage/signUp/signup";
import Support from "./landingPage/support/support";
import Navbar from "./landingPage/components/Navbar";
import Footer from "./landingPage/components/Footer";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="products" element={<Products />} />
          <Route path="signup" element={<Signup />} />
          <Route path="support" element={<Support />} />
          {/* Fallback route */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
