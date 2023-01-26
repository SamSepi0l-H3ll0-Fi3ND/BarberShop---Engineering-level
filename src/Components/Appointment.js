import { useEffect } from "react";
import { json, Link } from "react-router-dom";
import API from "../env";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";

const Appointment = ({ data }) => {
  const { date, service } = data;

  return (
    <div className="card w-11/12 mt-2 bg-[#171017] shadow-xl">
      <div className="flex flex-row card-body border-2 border-main-red rounded-xl h-full sm:gird-cols-1">
        <div className="flex flex-col w-5/12">
          <span className=" text-white font-bold ">{service.title}</span>
          <span className="mb-2">{service.description}</span>
          <span className="mb-2">
            {new Date(date).toLocaleString("pl-PL")}
          </span>
        </div>
        <div className="flex items-center justify-end w-full">
          <Link to="/dashboard/arrange">
            <button className="btn btn-outline text-white">
              Arrange again
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
