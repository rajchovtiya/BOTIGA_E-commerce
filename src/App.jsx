import React from "react";
import Navber from "./componete/Navber";
import Home from "./componete/Pages/Home";
import Footer from "./componete/Footer";
import { Route, Routes } from "react-router-dom";
import Blog from "./componete/Pages/Blog";

function App() {

  return <>
    <Navber />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />

    </Routes>
    <Footer />
  </>

}

export default App;
