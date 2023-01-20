import { useContext, useEffect, useState } from "react";
import API from "../../env";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import UserContext from "../../Context";
const UserInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <>
        <div class="card w-full h-full bg-main-dark rounded-none md:w-9/12">
          <div class="flex flex-col space-y-4 card-body">
            <h2 class="text-white text-center text-3xl underline  decoration-main-red underline-offset-8">
              Cześć {user.firstName}!
            </h2>
            <div className=" text-center text-main-red">
              These are some information about you:
            </div>
            <div className=" text-center text-white px-2">
              {" "}
              Here you can see what information you give us.
            </div>
            <div>
              <hr className="border-main-red" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-center ">
              <div className="flex flex-col space-y-2 text-main-red border-12">
                <p>Twoje imie</p>
                <p className="text-white text-2xl "> {user.firstName} </p>
              </div>
              <div className="flex flex-col space-y-2 text-main-red">
                <p>Twoje nazwisko</p>
                <p className="text-white text-2xl"> {user.lastName} </p>
              </div>

              <div className="col-span-2 flex flex-col space-y-2">
                <div className="flex flex-col space-y-2 text-main-red">
                  <p>Twoj numer telefonu</p>
                  <p className="text-white text-2xl"> {user.number} </p>

                  <p>Twoj address email</p>
                  <p className="text-white text-2xl"> {user.email} </p>
                </div>
              </div>
            </div>
            <div class="card-actions justify-end">
              <Link to="/dashboard/services">
                <button class="btn btn-outline border-main-red text-white border-2">
                  Dashboard
                </button>
              </Link>
              <Link to="/dashboard/useredit">
                <EditIcon
                  fontSize="large"
                  className="self-center cursor-pointer"
                  sx={{ color: red[800] }}
                ></EditIcon>
              </Link>
            </div>
            <div className="UserInfo w-full h-full"></div>
          </div>
        </div>
      </>
    </>
  );
};

export default UserInfo;
