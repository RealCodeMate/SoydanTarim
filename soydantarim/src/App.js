import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Products from './pages/products';
import Fungicides from './pages/products1/fungicides';
import Insecticides from "./pages/products1/insecticides";
import Fertilizers from './pages/products1/fertilizers';
import Acaricides from './pages/products1/acaricides';
import Seeds from "./pages/products1/seeds";
import Seedlings from './pages/products1/seedlings';
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
        <Route element={<Acaricides />} path="/ürünler/akarisitler" />
        <Route element={<Fertilizers />} path="/ürünler/gübreler" />
        <Route element={<Seeds />} path="/ürünler/tohumlar" />
        <Route element={<Seedlings />} path="/ürünler/fideler" />
        <Route element={<Contact />} path="/iletişim" />
        <Route element={<About />} path="/hakkımızda" />
        <Route element={<Gallery />} path="/galeri" />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
