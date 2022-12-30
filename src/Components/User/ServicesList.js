
import Service from "./Service";

const ServicesList = () => {
  return (
    <div className="card p-4 w-full bg-scroll bg-main-dark rounded-none md:w-9/12">
      <div className="mt-2 ml-2 ">
        <p className="text-4xl text-white">List of services </p>
        <p className="text-xl mt-2 mb-4"> What you need? We have it!</p>
        <div className="overflow-y-scroll h-128">
          <Service></Service>
          <Service></Service>
          <Service></Service>
          <Service></Service>
          <Service></Service>
          <Service></Service>
          
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
