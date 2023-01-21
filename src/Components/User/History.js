import { useEffect, useState } from "react";
import API from "../../env";
import Appointment from "../Appointment";

const History = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    try {
      fetch(`${API}/appointment`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
  }, []);
  const appointments = data ? (
    data.map((item) => <Appointment key={item._id} data={item} />)
  ) : (
    <p>Make your appointment for the first time!</p>
  );
  return (
    <div className="card p-4 w-full  bg-main-dark rounded-none md:w-9/12">
      <div className="mt-2 ml-2 ">
        <p className="text-4xl text-white">History </p>
        <p className="text-xl mt-2 mb-4"> History of yours appointments.</p>
        <div className="overflow-y-scroll h-128">{appointments}</div>
      </div>
    </div>
  );
};

export default History;
