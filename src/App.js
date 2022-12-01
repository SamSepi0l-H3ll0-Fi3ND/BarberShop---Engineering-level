import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "./Pages/HeroPage";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HeroPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
