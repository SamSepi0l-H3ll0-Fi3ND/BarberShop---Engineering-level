import Appointment from "../Appointment";

const History = () => {
  return (
    <div className="card p-4 w-full  bg-main-dark rounded-none md:w-9/12">
      <div className="mt-2 ml-2 ">
        <p className="text-4xl text-white">History </p>
        <p className="text-xl mt-2 mb-4">
          {" "}
          History of yours appointments.
        </p>
        <div className="overflow-y-scroll h-128">
        <Appointment></Appointment>
        <Appointment></Appointment>
        
        </div>
      </div>
    </div>
  );
};

export default History;
