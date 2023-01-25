import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Products from './pages/products';
import Fungicides from './pages/products1/fungicides';
import Insecticides from "./pages/products1/insecticides";
import Fertilizers from './pages/products1/fertilizers';
import ProductD from './pages/products1/productD';
import ProductE from './pages/products1/productE';
import ProductF from './pages/products1/productF';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";
import Contact from "./pages/contact";
import About from "./pages/about";
import Gallery from "./pages/gallery";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Products />} path="/ürünler" />
        <Route element={<Fungicides />} path="/ürünler/fungisitler" />
        <Route element={<Insecticides />} path="/ürünler/insektisitler" />
        <Route element={<Fertilizers />} path="/ürünler/gübreler" />
        <Route element={<ProductD />} path="/ürünler/productD" />
        <Route element={<ProductE />} path="/ürünler/productE" />
        <Route element={<ProductF />} path="/ürünler/productF" />
        <Route element={<Contact />} path="/iletişim" />
        <Route element={<About />} path="/hakkımızda" />
        <Route element={<Gallery />} path="/galeri" />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
