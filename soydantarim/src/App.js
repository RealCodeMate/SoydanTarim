import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
