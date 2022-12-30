import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "./Pages/HeroPage";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";

import Favourite from "./Components/User/Favourite";
import History from "./Components/User/History";
import UserInfo from "./Components/User/UserInfo";
import ServicesList from "./Components/User/ServicesList";
import EditUserInfo from "./Components/User/EditUserInfo";
import NotFound404 from "./Pages/NotFound404";
import AddService from "./Components/User/AddService";

function App() {
  const byleco = true;
  return (
    <Router>
      <Routes>
        <Route path="" exact element={<HeroPage />} />
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />}>
          {byleco && <Route path="userinfo" element={<UserInfo />} />}
          <Route path="useredit" element={<EditUserInfo />} />
          <Route path="services" element={<ServicesList />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="history" element={<History />} />
          <Route path="addservice" element={<AddService />} />
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;
