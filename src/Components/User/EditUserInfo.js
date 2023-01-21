import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../../Context";
import API from "../../env";

const EditUserInfo = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const confirm = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API}/Users`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    navigate("/dashboard/userinfo");
  };

  return (
    <div class="card bg-main-dark w-full rounded-none shadow-xl md:w-9/12">
      <div class="flex flex-col space-y-4 card-body">
        <h2 class="text-white text-center text-3xl underline decoration-2 underline-offset-8 decoration-main-red">
          Cześć {user.firstName}!
        </h2>
        <div className=" text-center text-white">
          Here, you can change information about yourself.
        </div>
        <div>
          <hr className="border-main-red" />
        </div>
        <form onSubmit={confirm}>
          <div className="grid grid-cols-2 gap-4 text-center ">
            <div className="flex flex-col space-y-2">
              <p>Change first name</p>
              <p className="text-white text-2xl">
                <input
                  name="firstName"
                  defaultValue={user.firstName}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered border-main-red w-full input-info max-w-xs"
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, firstName: e.target.value }))
                  }
                />
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Change Last Name</p>
              <p className="text-white text-2xl">
                <input
                  name="lastName"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered border-main-red w-full input-info max-w-xs"
                  defaultValue={user.lastName}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, lastName: e.target.value }))
                  }
                />{" "}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Phone number</p>
              <p className="text-white text-2xl">
                <input
                  name="number"
                  type="tel"
                  placeholder="Type here"
                  pattern="[0-9]{9}"
                  className="input input-bordered border-main-red w-full input-info max-w-xs"
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, number: e.target.value }))
                  }
                  defaultValue={user.number}
                />
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Email address </p>
              <p className="text-white text-2xl">
                <input
                  name="email"
                  type="text"
                  placeholder="Type here"
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="input input-bordered border-main-red input-info w-full max-w-xs"
                  defaultValue={user.email}
                />{" "}
              </p>
            </div>
            <div className="col-span-2 flex flex-col space-y-2 w-1/2 ">
              <div className="justify-center border-2 border-l-main-dark border-r-main-red h-24 border-r-transparent border-t-transparent border-b-transparent rounded-none mb-8"></div>
            </div>
          </div>
          <div class=" grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a class="btn bg-outline border-main-red text-dark-blue  border-2">
              Przejdź do profilu
            </a>
            <button class="btn btn-success text-main-dark border-2 border-success">
              Zapisz zmiany
            </button>
          </div>
        </form>
        <hr className="border-main-red " />
      </div>
      <div className="EditUserInfo w-full h-full mb-2 "></div>
    </div>
  );
};

export default EditUserInfo;
