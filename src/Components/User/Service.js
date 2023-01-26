import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../Context";
import API from "../../env";

const Service = ({ data }) => {
  const { title, description, price } = data;
  const { user } = useContext(UserContext);
  // const navigate = useNavigate();
  async function AddFav(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/users/favorite/` + user._id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      // navigate("/dashboard/favourite");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div class="card w-11/12 mt-2 bg-[#171017] shadow-xl">
      <div class="flex flex-row card-body border-2 border-main-red rounded-xl h-full sm:gird-cols-1">
        <div className="flex flex-col w-5/12">
          <span class="text-white font-bold ">{title}</span>
          <p className=" mt-4 w-full ">
            {description}
          </p>
          <button onClick={AddFav} className="btn btn-error btn-outline mt-8">
            Add to favourites
          </button>
        </div>
        <div className="flex items-center justify-end w-full">
          <span className="mr-4 text-white hidden md:inline-flex">
            {price} zł
          </span>
          <span>
            <Link to="/dashboard/makeappointment">
              <label for="my-modal-3" class="btn btn-outline text-white">
                Arrange
              </label>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Service;
