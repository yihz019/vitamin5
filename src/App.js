import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home.js";
import NotHome from "./pages/NotHome/NotHome.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<h2>My Website Yay!</h2>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/NotHome" element={<NotHome />} />
      </Routes>
    </div>
  );
}

export default App;
