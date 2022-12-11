import { red } from "@mui/material/colors";
import Logo from "./Logo";

const DashboardNavbar = () => {
  return (
    <div className="flex justify-start gap-4 flex-row w-full bg-main-dark h-20 border-main-red border-b-2 border-l-0 border-t-0 rounded-r-lg">
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
  );
};

export default DashboardNavbar;
