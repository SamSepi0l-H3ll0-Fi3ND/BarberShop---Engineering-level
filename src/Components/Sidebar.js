import ContentCutIcon from "@mui/icons-material/ContentCut";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import HistoryIcon from "@mui/icons-material/History";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
const admin = true;
const Sidebar = () => {
  return (
    <div className="flex flex-col z-10 bg-main-dark border-2 -mt-24 justify-between gap-6 border-main-red border-b-0 border-l-0 border-t-0 rounded-r-lg  w-20 hidden sm:flex  ">
      <ContentCutIcon
        fontSize="large"
        sx={{ color: red[800] }}
        className="self-center mt-6 cursor-pointer "
      ></ContentCutIcon>
      <div className="flex flex-col items-center  gap-6">
        <Link to="/dashboard/services">
          <ListIcon
            fontSize="large"
            className="self-center cursor-pointer "
            sx={{ color: red[800] }}
          ></ListIcon>
        </Link>
        <Link to="/dashboard/history">
          <HistoryIcon
            fontSize="large"
            className="self-center cursor-pointer"
            sx={{ color: red[800] }}
          ></HistoryIcon>
        </Link>
        <Link to="/dashboard/favourite">
          <FavoriteBorderIcon
            fontSize="large"
            className="self-center cursor-pointer"
            sx={{ color: red[800] }}
          ></FavoriteBorderIcon>
        </Link>
        <Link to="/dashboard/userinfo">
          <InfoIcon
            fontSize="large"
            className="self-center cursor-pointer"
            sx={{ color: red[800] }}
          ></InfoIcon>
        </Link>
        <Link to="/dashboard/useredit">
          <EditIcon
            fontSize="large"
            className="self-center cursor-pointer"
            sx={{ color: red[800] }}
          ></EditIcon>
        </Link>
        {admin && (
          <Link to="/dashboard/addservice">
            <AddIcon
              fontSize="large"
              className="self-center cursor-pointer mb-20"
              sx={{ color: red[800] }}
            ></AddIcon>
          </Link>
        )}
      </div>
      <div className="text-lg text-center mb-20">
        <LogoutIcon
          fontSize="large"
          className="self-center mb-6 cursor-pointer"
          sx={{ color: red[800] }}
        ></LogoutIcon>
      </div>
    </div>
  );
};

export default Sidebar;
