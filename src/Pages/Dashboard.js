import DashboardFotter from "../Components/DashboardFotter";
import Sidebar from "../Components/Sidebar";
import UserInfo from "../Components/User/UserInfo";
import EditUserInfo from "../Components/User/EditUserInfo";
import History from "../Components/User/History";
import Favourite from "../Components/User/Favourite";
import DashboardInfo from "../Components/DashboardInfo";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap w-screen">
      <Sidebar></Sidebar>

      <Favourite></Favourite>
      <DashboardInfo></DashboardInfo>
      <History></History>
    </div>
  );
};

export default Dashboard;
