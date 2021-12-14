// import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import NavBar from "./NavBar";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import BookNow from "./pages/BookNow";
import KitchenAndBathroom from "./pages/KitchenAndBathroom";
import Windows from "./pages/Windows";
import Carpets from "./pages/Carpet";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<BookNow />} />
          <Route path="/kitchen" element={<KitchenAndBathroom />} />
          <Route path="/windows" element={<Windows />} />
          <Route path="/carpet" element={<Carpets />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
