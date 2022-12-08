import Logo from "./Logo";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import ListIcon from "@mui/icons-material/List";
import HistoryIcon from "@mui/icons-material/History";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Sidebar = () => {
  return (
    // <div className="flex justify-start gap-4 flex-row w-full bg-main-dark h-20 border-main-red border-b-2 border-l-0 border-t-0 rounded-r-lg">
    <div className="flex flex-col h-screen w-screen">
      <div className="flex justify-start gap-4 flex-row w-screen bg-main-dark h-20 border-main-red border-b-2 border-l-0 border-t-0 rounded-r-lg">
        <div className="ml-28 mt-4">
          <Logo
            fontSize="large"
            className="self-center"
            sx={{ color: red[800] }}
          ></Logo>
        </div>
        <div className="self-center hidden md:flex">
          <p>Coś tam</p>
        </div>
      </div>
      <div className="flex flex-col z-10 bg-main-dark border-2 -mt-20 -mb-20 justify-between gap-6 border-main-red border-b-0 border-l-0 border-t-0 rounded-r-lg h-screen w-24 hidden sm:flex  ">
        <ContentCutIcon
          fontSize="large"
          sx={{ color: red[800] }}
          className="self-center mt-6 cursor-pointer"
        ></ContentCutIcon>
        <div className="flex flex-col -mt-72 gap-6">
          <ListIcon
            fontSize="large"
            className="self-center cursor-pointer"
            sx={{ color: red[800] }}
          ></ListIcon>
          <HistoryIcon
            fontSize="large"
            className="self-center cursor-pointer"
            sx={{ color: red[800] }}
          ></HistoryIcon>
          <FavoriteBorderIcon
            fontSize="large"
            className="self-center cursor-pointer"
            sx={{ color: red[800] }}
          ></FavoriteBorderIcon>
          <InfoIcon
            fontSize="large"
            className="self-center cursor-pointer"
            sx={{ color: red[800] }}
          ></InfoIcon>
          <EditIcon
            fontSize="large"
            className="self-center cursor-pointer"
            sx={{ color: red[800] }}
          ></EditIcon>
        </div>
        <div className="text-lg text-center">
          <LogoutIcon
            fontSize="large"
            className="self-center mb-6 cursor-pointer"
            sx={{ color: red[800] }}
          ></LogoutIcon>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

{
  /* <div className="flex flex-col z-10 bg-main-dark border-2 justify-between gap-6 border-main-red border-b-0 border-l-0 border-t-0 rounded-r-lg h-screen w-24 hidden sm:flex  ">
<ContentCutIcon
  fontSize="large"
  sx={{ color: red[800] }}
  className="self-center mt-6 cursor-pointer"
></ContentCutIcon>
<div className="flex flex-col -mt-72 gap-6">
  <ListIcon
    fontSize="large"
    className="self-center cursor-pointer"
    sx={{ color: red[800] }}
  ></ListIcon>
  <HistoryIcon
    fontSize="large"
    className="self-center cursor-pointer"
    sx={{ color: red[800] }}
  ></HistoryIcon>
  <FavoriteBorderIcon
    fontSize="large"
    className="self-center cursor-pointer"
    sx={{ color: red[800] }}
  ></FavoriteBorderIcon>
  <InfoIcon
    fontSize="large"
    className="self-center cursor-pointer"
    sx={{ color: red[800] }}
  ></InfoIcon>
  <EditIcon
    fontSize="large"
    className="self-center cursor-pointer"
    sx={{ color: red[800] }}
  ></EditIcon>
</div>
<div className="text-lg text-center">
  <LogoutIcon
    fontSize="large"
    className="self-center mb-6 cursor-pointer"
    sx={{ color: red[800] }}
  ></LogoutIcon>
</div>
</div> */
}
