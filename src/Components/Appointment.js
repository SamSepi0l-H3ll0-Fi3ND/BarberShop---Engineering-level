import { json, Link } from "react-router-dom";

const Appointment = ({ data }) => {
  const { date, service } = data;
  
  return (
    <div class="card w-11/12 mt-2 bg-[#171017] shadow-xl">
      <div class="flex flex-row card-body border-2 border-main-red rounded-xl h-full sm:gird-cols-1">
        <div className="flex flex-col w-5/12">
          <span class=" text-white font-bold ">{service.title}</span>
          <span className="truncate w-full ... 2xl:text-clip">
            {service.description}
          </span>
          <span>{date}</span>
        </div>
        <div className="flex items-center justify-end w-full">
          <Link to="/dashboard/arrange">
            <button className="btn btn-outline text-white">
              Arrange again
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
