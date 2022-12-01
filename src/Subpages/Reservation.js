const Reservation = () => {
  return (
    <div className="Reservation__background w-full h-96">
      <div className="flex justify-center pt-8 pb-8">
        <div className=" border-2 border-l-main-red h-24 border-r-transparent border-t-transparent border-b-transparent rounded-full mb-8"></div>
      </div>
      <div className="text-center text-white">
        <p className="text-5xl"> Make reservation now!</p>
        <a class="btn btn-wide btn-ghost border-solid border-main-red rounded-none border-2 mt-8">
          Make an appointment
        </a>
      </div>
    </div>
  );
};

export default Reservation;
