import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
