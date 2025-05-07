import React from "react";
import Navber from "./componete/Navber";
import Home from "./componete/Pages/Home";
import Footer from "./componete/Footer";
import { Route, Routes } from "react-router-dom";
import Blog from "./componete/Pages/Blog";
import BlogDetails from "./componete/Pages/BlogDetails";

function App() {

  return <>
    <Navber />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogdetails" element={<BlogDetails/>} />

    </Routes>
    <Footer />
  </>

}

export default App;
