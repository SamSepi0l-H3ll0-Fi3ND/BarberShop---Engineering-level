import { useEffect, useState } from "react";
import API from "../../env";
import Service from "./Service";

const ServicesList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    try {
      fetch(`${API}/services`, {
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
 
  const services =data ? data.map((item) => 
    <Service key={item._id} data={item}/> 
  ): null;
  console.log(services);
  return (
    <div className="card p-4 w-full bg-scroll bg-main-dark rounded-none md:w-9/12">
      <div className="mt-2 ml-2 ">
        <p className="text-4xl text-white">List of services </p>
        <p className="text-xl mt-2 mb-4"> What you need? We have it!</p>
        <div className="overflow-y-scroll h-128">{services}</div>
      </div>
    </div>
  );
};

export default ServicesList;
