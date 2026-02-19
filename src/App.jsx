import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainNavbar from "./layout/MainNavbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import MoreDetail from "./components/MoreDetail";

function App() {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<MoreDetail />} />
      </Routes>
    </div>
  );
}

export default App;
