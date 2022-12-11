import Appointment from "../Appointment";
import Service from "./Service";

const ServicesList = () => {
  return (
    <div className="card p-4 w-9/12 bg-main-dark rounded-none">
      <div className="mt-2 ml-2 ">
        <p className="text-4xl text-white">List of services </p>
        <p className="text-xl mt-2 mb-4"> What you need? We have it!</p>
       <Service></Service>
       <Service></Service>
       <Service></Service>
       <Service></Service>
       
      </div>
    </div>
  );
};

export default ServicesList;
