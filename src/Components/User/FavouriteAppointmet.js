import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";
import { useContext } from "react";
import UserContext from "../../Context";

const FavouriteAppointment = ({ data }) => {
  const { title, description, price } = data;

  return (
    <div class="card w-11/12 mt-2 bg-[#171017] shadow-xl">
      <div class="flex flex-row card-body border-2 border-main-red rounded-xl h-full sm:gird-cols-1">
        <div className="flex flex-col w-5/12">
          <span class=" text-white font-bold ">{title}</span>
          <span className="truncate w-full ... 2xl:text-clip">
            {description}
          </span>
          <span>{price}</span>
        </div>
        <div className="flex items-center justify-end w-full">
          <FavoriteBorderIcon
            fontSize="large"
            sx={{ color: red[800] }}
            className="self-center cursor-pointer ml-4"
          ></FavoriteBorderIcon>
        </div>
      </div>
    </div>
  );
};

export default FavouriteAppointment;
