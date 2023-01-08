import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Products from './pages/products';
import ProductA from './pages/products1/productA';
import ProductB from './pages/products1/productB';
import ProductC from './pages/products1/productC';
import ProductD from './pages/products1/productD';
import ProductE from './pages/products1/productE';
import ProductF from './pages/products1/productF';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Products />} path="/ürünler" />
        <Route element={<ProductA />} path="/ürünler/productA" />
        <Route element={<ProductB />} path="/ürünler/productB" />
        <Route element={<ProductC />} path="/ürünler/productC" />
        <Route element={<ProductD />} path="/ürünler/productD" />
        <Route element={<ProductE />} path="/ürünler/productE" />
        <Route element={<ProductF />} path="/ürünler/productF" />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
