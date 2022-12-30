import RegisterForm from "../Components/RegisterForm";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-main-dark grid grid-none md:grid-cols-2">
      <div className="bg-[url(./Photos/Register.jpg)] invisible md:visible bg-center bg-cover order-last relative md:order-none min-h-full">
        <div className="ml-8 absolute inset-x-0 bottom-10">
          <p className="text-white text-2xl">
            Turn your ideas <br></br> into reality
          </p>
          <p className="underline underline-offset-4 decoration-main-red text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            laudantium obcaecati
          </p>
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-center  mt-8 h-2/3">
        <div className="w-2/3">
          <Logo></Logo>
          <p className="text-xl text-white mt-4 underline underline-offset-4 decoration-main-red">
            We are glad to meet you!
          </p>
          <p className="mb-16">Plesae enter your details.</p>
          <RegisterForm></RegisterForm>
          <p className="text-center mt-4">
            Already have an account?
            <Link to="/login">
              <span className="underline underline-offset-4 decoration-main-red pl-1">
                Sing in!
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
