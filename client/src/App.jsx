import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import Calculate from "./components/Calculate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/calculate" element={<Calculate />} />
      </Routes>
    </Router>
  );
}

export default App;
