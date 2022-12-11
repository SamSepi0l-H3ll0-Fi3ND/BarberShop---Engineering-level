const Appointment = () => {
  const reservation = {
    typeofReservation: "Beard SPA",
    descOfReservation: "Trimming,Contouring Bread + Oils + Hot Towel.",
    date: "22-12-2022 ",
    price: "100 zł",
  };
  return (
    <div class="card w-11/12 mt-2 bg-[#171017] shadow-xl">
      <div class="flex flex-row card-body border-2 border-main-red rounded-xl h-full sm:gird-cols-1">
        <div className="flex flex-col">
          <span class="text-white font-bold ">
            {reservation.typeofReservation}
          </span>
          <span>{reservation.descOfReservation}</span>
        </div>
        <div className="flex items-center justify-end w-1/2">
          <span className="mr-4 text-white"> {reservation.price} </span>
          <button className="btn btn-outline text-white">Arrange</button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
