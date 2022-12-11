import Logo from "../Logo";
const EditUserInfo = () => {
  const user = {
    firstName: "Jakub",
    lastName: "Figzał",
    telephone: "312 453 562",
    email: "kubafigzal@gmail.com",
  };
  return (
    <div class="card bg-main-dark w-1/2 rounded-none shadow-xl">
      <div class="flex flex-col  space-y-4 card-body">
        <h2 class="text-white text-center text-3xl underline decoration-2 underline-offset-8 decoration-main-red">
          Cześć {user.firstName}!
        </h2>
        <div className=" text-center text-white">
          Here, you can change information about yourself.
        </div>
        <div>
          <hr className="border-main-red" />
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="flex flex-col space-y-2">
            <p>Zmień imie</p>
            <p className="text-white text-2xl">
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered border-main-red w-full input-info max-w-xs"
              />
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Zmień nazwisko</p>
            <p className="text-white text-2xl">
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered border-main-red w-full input-info max-w-xs"
              />{" "}
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Zmień nick</p>
            <p className="text-white text-2xl">
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered border-main-red w-full input-info max-w-xs"
              />
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Zmień address</p>
            <p className="text-white text-2xl">
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered border-main-red input-info w-full max-w-xs"
              />{" "}
            </p>
          </div>
          <div className="col-span-2 flex flex-col space-y-2 w-1/2">
            <div className="justify-center border-2 border-l-main-dark border-r-main-red h-24 border-r-transparent border-t-transparent border-b-transparent rounded-none mb-8"></div>
          </div>
        </div>
        <div class=" grid grid-cols-2 gap-4">
          <button class="btn bg-outline border-main-red text-dark-blue  border-2">
            Przejdź do profilu
          </button>
          <button class="btn btn-success text-main-dark border-2 border-success">
            Zapisz zmiany
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserInfo;
