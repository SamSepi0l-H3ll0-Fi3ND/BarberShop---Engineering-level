import { useNavigate } from "react-router-dom";
import API from "../../env";
const AddService = () => {
  const navigate = useNavigate();
  async function AddServ(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    try {
      const respone = await fetch(`${API}/services`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formdata.get("title").valueOf(),
          description: formdata.get("description").valueOf(),
          price: formdata.get("price").valueOf(),
        }),
      });
      navigate("/dashboard/services");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="card p-4 w-full bg-main-dark rounded-none md:w-9/12">
      <form onSubmit={AddServ}>
        <div class="flex flex-col space-y-4 card-body">
          <h2 class=" text-white text-center text-3xl underline  decoration-main-red underline-offset-8">
            Hi Owner!
          </h2>
          <div className=" text-center text-main-red ">
            You can add here another type of Service:
          </div>
          <div className="flex flex-col items-center text-white space-y-6">
            <p className="text-2xl"> Name of Service:</p>
            <input
              type="text"
              name="title"
              placeholder="Name of service"
              className="input input-bordered border-main-red max-w-xs"
            />{" "}
            <hr className="border-main-red w-4/5" />
            <p className="text-2xl"> Description:</p>
            <textarea
              type="text"
              rows="8"
              cols="100"
              name="description"
              placeholder="Description"
              className="rounded-md caret-transparent bg-[#2A303C] border-2 border-main-red resize-none text-left w-11/12 md:w-1/2"
            />{" "}
            <hr className="border-main-red w-4/5" />
            <p className="text-2xl"> Pirce:</p>
            <input
              name="price"
              type="number"
              min="1"
              placeholder="Price"
              className="input input-bordered border-main-red max-w-xs"
            />{" "}
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-outline text-white">
                List of services
              </button>
              <button class="btn btn-success text-main-dark border-2 border-success max-w-xs  justify-center">
                Zapisz zmiany
              </button>{" "}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
