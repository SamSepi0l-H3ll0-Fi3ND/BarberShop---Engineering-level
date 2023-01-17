import ButtonGS from "./ButtonGS";
const HeroContent = () => {
  return (
      <div className="grid grid-rows-3 grid-flow-col mt-4 sm:justify-items-center lg:justify-items-start ml-24 xl:ml-44">
        <div className="py-6 text-main-red uppercase font-medium sm: my-4">
          Creative mind, Creative works.
        </div>
        <div className="text-3xl md:text-5xl text-white font-bold py-8">
        Classy barbers
        </div>
        <div >
          <ButtonGS ></ButtonGS>
        </div>
      </div>
  );
};

export default HeroContent;
