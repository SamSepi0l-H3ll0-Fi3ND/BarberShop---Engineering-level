import Appointment from "../Appointment";

const History = () => {
  return (
    <div className="card p-4 w-1/2 bg-main-dark">
      <div className="mt-2 ml-2 ">
        <p className="text-4xl text-white">History </p>
        <p className="text-xl mt-2"> History of yours appointments.</p>
        <Appointment></Appointment>
        <Appointment></Appointment>
        <Appointment></Appointment>
        <Appointment></Appointment>
      </div>
    </div>
  );
};

export default History;
