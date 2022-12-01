import { Link } from "react-router-dom";
const ButtonAppointment = () => {
  return (
    <>
      <label
        for="my-modal-2"
        class="btn btn-wide btn-ghost border-solid border-main-red rounded-none border-2 mt-8"
      >
        Make an appointment
      </label>
      <input type="checkbox" id="my-modal-2" class="modal-toggle " />
      <label for="my-modal-2" class="modal cursor-pointer ">
        <label class="modal-box relative bg-main-dark rounded-none" for="">
          <h3 class="text-lg font-bold text-center">
            If you want to make an appointment:
          </h3>
          <p class="flex justify-center w-full py-4">
            <Link
              to="/register"
              className="btn w-1/3 btn-ghost border-solid border-main-red rounded-none border-2 "
            >
              Register
            </Link>
            <div class="divider divider-horizontal self-center">OR</div>
            <Link
              to="/login"
              className="btn  w-1/3 btn-ghost border-solid border-main-red rounded-none border-2 "
            >
              Log in
            </Link>
          </p>
          <hr className="border-main-red w-full py-4"></hr>
          <p className="text-lg font-bold text-center text-white text-sm">
            Call me using this number: +48 321 321 312
          </p>
        </label>
      </label>
    </>
  );
};

export default ButtonAppointment;
