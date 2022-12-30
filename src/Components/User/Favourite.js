import Appointment from "../Appointment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";
const Favourite = () => {
  return (
    <div className="card p-4 w-full bg-main-dark rounded-none md:w-9/12">
      <div className="mt-2 ml-2 ">
        <p className="text-4xl text-white">Favourite</p>
        <p className="text-xl mt-2  mb-4">
          These is your list of favourites services
        </p>
        <div className="flex flex-col overflow-hidden h-128">
          <div className="flex">
            <Appointment></Appointment>
              <FavoriteBorderIcon
                fontSize="large"
                sx={{ color: red[800] }}
                className="self-center cursor-pointer ml-4 "
              ></FavoriteBorderIcon>
          </div>
          <div className="flex">
            <Appointment></Appointment>
            <FavoriteBorderIcon
              fontSize="large"
              sx={{ color: red[800] }}
              className="self-center cursor-pointer ml-4"
            ></FavoriteBorderIcon>
          </div>
          <div className="flex">
            <Appointment></Appointment>
            <FavoriteBorderIcon
              fontSize="large"
              sx={{ color: red[800] }}
              className="self-center cursor-pointer ml-4"
            ></FavoriteBorderIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
