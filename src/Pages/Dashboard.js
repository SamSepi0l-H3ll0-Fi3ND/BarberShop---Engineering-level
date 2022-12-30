import Sidebar from "../Components/Sidebar";

import DashboardInfo from "../Components/DashboardInfo";

import DashboardNavbar from "../Components/DashboardNavbar";

import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap max-h-screen w-full min-h-screen">
      <DashboardNavbar></DashboardNavbar>
      <div className="flex flex-nowrap min-h-screen w-full ">
        <Sidebar></Sidebar>
        <Outlet />
        <DashboardInfo></DashboardInfo>
      </div>
    </div>
  );
};

export default Dashboard;
