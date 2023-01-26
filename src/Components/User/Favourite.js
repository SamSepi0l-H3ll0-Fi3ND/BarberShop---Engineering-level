import Appointment from "../Appointment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";
import { useContext, useEffect, useState } from "react";
import API from "../../env";
import FavouriteAppointment from "./FavouriteAppointmet";
import UserContext from "../../Context";
const Favourite = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="card p-4 w-full bg-main-dark rounded-none md:w-9/12">
      <div className="mt-2 ml-2 ">
        <p className="text-4xl text-white">Favourite</p>
        <p className="text-xl mt-2  mb-4">
          These is your list of favourites services
        </p>
        <div className="flex flex-col overflow-hidden h-128">
          <div className="flex flex-wrap">
            {user.favorite.map((item) => (
              <FavouriteAppointment key={item._id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
