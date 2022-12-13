import Logo from "../Components/Logo";

const NotFound404 = () => {
  return (
    <div className="flex flex-col justify-center  bg-main-dark h-screen">
      <p className="self-center text-white">
        <Logo className="self-center"></Logo>
        Soory,but this monkey couldn't handle this.
      </p>
      <p className="self-center text-white">
        You must log in first, then this page will show you, or this page
        dosen't exist.{" "}
      </p>
      <hr className="border-main-red w-1/3 my-4 self-center"></hr>
      <div className="NotFound self-center h-2/3 w-1/2 border border-main-red">
        {" "}
      </div>
    </div>
  );
};

export default NotFound404;
