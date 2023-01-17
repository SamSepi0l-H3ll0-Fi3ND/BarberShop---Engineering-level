import { useEffect, useState } from "react";
import API from "../../env";
import User from "./User";
const UserList = () => {
 const [user, setUser]= useState([]);
 useEffect(() => {
  try {
    fetch(`${API}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  
  } catch (error) {
    console.log(error);
  }
 },[]);

 const users = user.length ? user.map((item) => 
  <User key={item._id} user={item}/>
) : <p>Brak użytkowników</p>;

  return (
    <div className="card p-4 w-full bg-main-dark rounded-none md:w-9/12">
      <p className="text-4xl text-white">List of users </p>
      <p className="text-xl mt-2 mb-4">
        {" "}
        These are the people who enjoyed your work!
      </p>
      <div className="grid grid-cols-5 gap-4 place-items-center text-white text-2xl underline underline-offset-4 decoration-main-red">
        <p>FirstName</p>
        <p>LastName</p>
        <p>Number</p>
        <p>Email</p>
      </div>
      <div className="overflow-y-scroll h-116">
      {users}
      </div>
    </div>
  );
};

export default UserList;
