const Services = () => {
  return (
    <div className="bg-main-dark pt-8 lg:px-10" id="services">
      <div className="flex flex-row">
        <hr className="border-main-red w-16 mx-4 my-4"></hr>
        <p className="text-white text-4xl"> Services </p>
      </div>
      <p className="text-main-red text-sm uppercase mx-4 my-2">And many more</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div class="Service__card-one-bg w-full relative bg-nav h-36 lg:h-72 object-cover border-b-4 border-main-red">
          <p className="absolute inset-x-5 bottom-2 invisible sm:visible text-white text-3xl ">
            Beard trim
          </p>
        </div>
        <div class="Service__card-two-bg w-full relative bg-nav h-36 lg:h-72 object-cover border-b-4 border-main-red">
          <p className="absolute inset-x-5 bottom-2 invisible sm:visible text-white text-3xl ">
            Razor combo
          </p>
        </div>
        <div class="Service__card-three-bg w-full relative bg-nav h-36 lg:h-72 object-cover border-b-4 border-main-red">
          <p className="absolute inset-x-5 bottom-2 invisible sm:visible text-white text-3xl ">
            Cover beard & facial hair
          </p>
        </div>
        <div class="Service__card-four-bg w-full relative bg-nav h-36 lg:h-72 object-cover  border-b-4 border-main-red">
          <p className="absolute inset-x-5 bottom-2 invisible sm:visible text-main-dark text-3xl ">
            Premium Servis
          </p>
        </div>
        <div class="Service__card-five-bg w-full relative bg-nav h-36 lg:h-72 object-cover border-b-4 border-main-red">
          <p className="absolute inset-x-5 bottom-2 invisible sm:visible text-white text-3xl ">
            Dyeing of hairs
          </p>
        </div>
        <div class="Service__card-six-bg w-full relative bg-nav h-36 lg:h-72 object-cover  border-b-4 border-main-red">
          <p className="absolute inset-x-5 bottom-2 invisible sm:visible text-white text-3xl ">
            Shaving
          </p>
        </div>
        <div class="Service__card-seven-bg w-full relative bg-nav h-36 lg:h-72 object-cover  border-b-4 border-main-red">
          <p className="absolute inset-x-5 bottom-2 invisible sm:visible text-white text-3xl ">
            Modeling hairstyle
          </p>
        </div>
        <div class="Service__card-eight-bg w-full relative bg-nav h-36 lg:h-72 object-cover  border-b-4 border-main-red">
          <p className="absolute inset-x-5 bottom-2 invisible sm:visible text-white text-3xl ">
            Beard SPA
          </p>
        </div>
        <div class="Service__card-nine-bg w-full relative bg-nav h-36 lg:h-72 object-cover border-b-4 border-main-red">
          <p className="absolute inset-x-5 bottom-2 invisible sm:visible text-white text-3xl ">
            Shaver haircut
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bottom-0 border-2 border-l-main-red h-12 border-r-transparent border-t-transparent border-b-transparent rounded-null bottom-0 mt-16"></div>
      </div>
    </div>
  );
};

export default Services;
