import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<SingleProduct />} />
    </Routes>
  );
};

export default App;
