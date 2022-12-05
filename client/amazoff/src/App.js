import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/home/home";
import Counter from "./Components/counter/counter";
import Navbar from "./Components/navbar/navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
