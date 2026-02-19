import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainNavbar from "./layout/MainNavbar";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
