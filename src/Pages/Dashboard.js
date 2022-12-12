import Sidebar from "../Components/Sidebar";
import UserInfo from "../Components/User/UserInfo";
import EditUserInfo from "../Components/User/EditUserInfo";
import History from "../Components/User/History";
import Favourite from "../Components/User/Favourite";
import DashboardInfo from "../Components/DashboardInfo";
import Appointment from "../Components/Appointment";
import DashboardNavbar from "../Components/DashboardNavbar";
import ServicesList from "../Components/User/ServicesList";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap h-screen w-full">
      <DashboardNavbar></DashboardNavbar>
      <div className="flex flex-nowrap w-full">
        <Sidebar></Sidebar>
        <Outlet />
        <DashboardInfo></DashboardInfo>
      </div>
    </div>
  );
};

export default Dashboard;
