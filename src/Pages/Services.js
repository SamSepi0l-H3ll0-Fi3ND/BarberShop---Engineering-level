const Services = () => {
  return (
    <div className="bg-main-dark pt-8 px-40">
      <div className="flex flex-row">
        <hr className="border-main-red w-16 mx-4 my-4"></hr>
        <p className="text-white text-4xl"> Services </p>
      </div>
      <p className="text-main-red text-sm uppercase mx-4 my-4">And many more</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      <div class="Service__card-one-bg w-full bg-nav h-36 lg:h-72 object-cover border-b-4 border-main-red">
          <p className="invisible sm:visibletext-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-two-bg w-full bg-nav h-36 lg:h-72 object-cover border-b-4 border-main-red">
          <p className="invisible sm:visible text-white text-3xl bottom-0 ">Shaving</p>
        </div>
        <div class="Service__card-three-bg w-full bg-nav h-36 lg:h-72 object-cover border-b-4 border-main-red">
          <p className="invisible sm:visible  text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-four-bg w-full bg-nav h-36 lg:h-72 object-cover  border-b-4 border-main-red">
          <p className="invisible sm:visible text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-five-bg w-full bg-nav h-36 lg:h-72 object-cover border-b-4 border-main-red">
          <p className="invisible sm:visible text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-six-bg w-full bg-nav h-36 lg:h-72 object-cover  border-b-4 border-main-red">
          <p className="invisible sm:visible text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-seven-bg w-full bg-nav h-36 lg:h-72 object-cover  border-b-4 border-main-red">
          <p className="invisible sm:visible text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-eight-bg w-full bg-nav h-36 lg:h-72 object-cover  border-b-4 border-main-red">
          <p className="invisible sm:visible text-white text-3xl bottom-0">Shaving</p>
        </div>
        <div class="Service__card-nine-bg w-full bg-nav h-36 lg:h-72 object-cover border-b-4 border-main-red">
          <p className="invisible sm:visible text-white text-3xl bottom-0">Shaving</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
