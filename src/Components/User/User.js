import { useContext } from "react";
import UserContext from "../../Context";
import API from "../../env";

const User = ({ data }) => {
  async function Delete(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/users/userlist/${data._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="grid grid-cols-5 gap-2 place-items-center text-white text-xl mt-6">
      <div>{data.firstName}</div>
      <div>{data.lastName}</div>
      <div>{data.number}</div>
      <div>{data.email}</div>
      <button className="btn btn-error btn-sm" onClick={Delete}>
        Usuń
      </button>
    </div>
  );
};

export default User;
