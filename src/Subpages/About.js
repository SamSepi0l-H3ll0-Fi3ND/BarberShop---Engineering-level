const About = () => {
  return (
    <div className="bg-main-dark md:h-max pt-8 px-10 " id="About">
      <div className="flex flex-row m-8">
        <hr className="border-main-red w-16 mx-4 my-4"></hr>
        <p className="text-white text-4xl"> About </p>
      </div>
      <p className="text-main-red sm:text-center  md:text-left text-sm uppercase mx-4 my-2 ">
        few words about us
      </p>
      <div className="grid h-2/3 grid-cols-1 md:grid-cols-2 gap-6">
        <div className="About__hero_png h-96 relative md:h-auto">
          <p className="absolute inset-x-5 bottom-12 invisible sm:visible text-white text-5xl">
            Paul Smith
          </p>
          <p className="absolute inset-x-5 bottom-4 invisible sm:visible text-white text-xl ">
            Creativity and self confidence
          </p>
        </div>
        <div className="grid h-full  grid-rows-2 gap-6">
          <div className="About__philosophy_png h-80 relative">
            <p className="absolute inset-x-5 bottom-10 invisible sm:visible text-white text-5xl">
              Philosophy
            </p>
            <p className="absolute inset-x-5 bottom-2 invisible sm:visible text-white text-2xl ">
              Trust pays Off
            </p>
          </div>
          <div className="About__office_png relative">
            <p className="absolute inset-x-5 bottom-10 invisible sm:visible text-white text-5xl ">
              Office
            </p>
            <p className="absolute inset-x-5 bottom-2 invisible sm:visible text-white text-2xl ">
              Somewhere on earth
            </p>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
        <div>
          <p className="text-2xl text-white"> Who we are?</p>
          <p className="text-start mt-2 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="flex justify-center h-full">
          <div className=" invisible xl:visible border-2 border-l-main-red border-r-transparent border-t-transparent border-b-transparent rounded-full "></div>
        </div>
        <div>
          <p className="text-2xl text-white text-start"> Our Philosophy</p>
          <p className="text-start mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="flex justify-center h-full">
          <div className=" invisible  xl:visible border-2 border-l-main-red  border-r-transparent border-t-transparent border-b-transparent rounded-full "></div>
        </div>
        <div>
          <p className="text-2xl sm:text-start text-white xl:text-end">
            {" "}
            Our Philosophy
          </p>
          <p className="sm:text-start lg:text-end mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-8">
        <div className=" border-2 border-l-main-red h-12 border-r-transparent border-t-transparent border-b-transparent rounded-null "></div>
      </div>
    </div>
  );
};

export default About;
