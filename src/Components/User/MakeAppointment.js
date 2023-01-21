import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../env";

const MakeAppointment = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [service, setService] = useState();
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

  async function AddApp(e) {
    e.preventDefault();

    const formdata = new FormData(e.target);
    try {
      const respone = await fetch(`${API}/appointment`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: formdata.get("Date").valueOf(),
          service: service,
        }),
      });

      navigate("/dashboard/history");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div class="card bg-main-dark w-full rounded-none shadow-xl md:w-9/12">
      <div class="flex flex-col space-y-4 card-body">
        <h2 class="text-white text-center text-3xl underline decoration-2 underline-offset-8 decoration-main-red">
          Appointments
        </h2>
        <div className=" text-center text-white">
          Here, You can finalize your appointment here.
        </div>
        <div>
          <hr className="border-main-red" />
        </div>
        <form onSubmit={AddApp}>
          <div className="grid grid-cols-2 gap-4 text-center ">
            <div className="flex flex-col space-y-2">
              <p>Choose a date</p>
              <p className="text-white text-2xl">
                <input
                  name="Date"
                  type="datetime-local"
                  placeholder="Choose date"
                  className="input input-bordered border-main-red w-full input-info max-w-xs"
                />
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Choose a service</p>
              <p className="text-white text-2xl">
                <select
                  name="Service"
                  className="select select-bordered border-main-red w-full input-info max-w-xs"
                  onChange={(e) => setService(JSON.parse(e.target.value))}
                >
                  <option disabled selected>
                    Pick your service
                  </option>
                  {data.map((item) => (
                    <option key={item._id} value={JSON.stringify(item)}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </p>
            </div>
            <div className="col-span-2 flex flex-col space-y-2 w-1/2 ">
              <div className="justify-center border-2 border-l-main-dark border-r-main-red h-24 border-r-transparent border-t-transparent border-b-transparent rounded-none mb-8"></div>
            </div>
          </div>
          <div class=" grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              to="/dashboard/services"
              class="btn bg-outline border-main-red text-dark-blue  border-2"
            >
              Back to service list
            </Link>
            <button class="btn btn-success text-main-dark border-2 border-success">
              Make appointment
            </button>
          </div>
        </form>
        <hr className="border-main-red " />
      </div>
      <div className="MakeAppointment w-full h-full mb-2 "></div>
    </div>
  );
};

export default MakeAppointment;
