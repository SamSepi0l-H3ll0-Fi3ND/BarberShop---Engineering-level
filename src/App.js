import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "./Pages/HeroPage";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HeroPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
