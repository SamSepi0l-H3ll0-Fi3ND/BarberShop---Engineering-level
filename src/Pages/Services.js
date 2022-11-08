const Services = () => {
  return (
    <div className="h-screen bg-main-dark pt-8 px-40">
      <div className="flex flex-row">
        <hr className="border-main-red w-16 mx-4 my-4"></hr>
        <p className="text-white text-4xl"> Services </p>
      </div>
      <p className="text-main-red text-sm uppercase mx-4 my-4">And many more</p>
      <div className="grid grid-flow-col grid-rows-3 gap-4 h-5/6 ">
        <div class="Service__card-one-bg card bg-base-300 rounded-none  border-b-4 border-main-red">
          <p className=" absolute text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-two-bg realtive card bg-base-300 rounded-none  border-b-4 border-main-red">
          <p className=" absolute text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-three-bg card bg-base-300 rounded-none  border-b-4 border-main-red">
          <p className=" absolute text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-four-bg card bg-base-300 rounded-none  border-b-4 border-main-red">
          <p className=" absolute text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-five-bg card bg-base-300 rounded-none  border-b-4 border-main-red">
          <p className=" absolute text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-six-bg card bg-base-300 rounded-none  border-b-4 border-main-red">
          <p className=" absolute text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-seven-bg card bg-base-300 rounded-none  border-b-4 border-main-red">
          <p className=" absolute text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-eight-bg card bg-base-300 rounded-none  border-b-4 border-main-red">
          <p className=" absolute text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-nine-bg card  bg-base-300 rounded-none  border-b-4 border-main-red">
          <p className=" absolute text-white text-3xl bottom-0">Shaving</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
