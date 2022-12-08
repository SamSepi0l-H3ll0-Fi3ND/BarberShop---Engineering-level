import DashboardFotter from "../Components/DashboardFotter";
import Sidebar from "../Components/Sidebar";
import UserInfo from "../Components/User/UserInfo";
import EditUserInfo from "../Components/User/EditUserInfo";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap">
    <Sidebar></Sidebar>
     <EditUserInfo ></EditUserInfo>
     <UserInfo></UserInfo>
    </div>
  );
};

export default Dashboard;
