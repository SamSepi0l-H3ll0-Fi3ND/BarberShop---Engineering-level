import ButtonGS from "./ButtonGS";
const HeroContent = () => {
  return (
    <div class="hero">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div>
          <p class="py-6 text-main-red uppercase font-medium">
            Creative mind, Creative works.
          </p>
          <h1 class="text-5xl font-bold py-8" >Box Office News!</h1>
          <ButtonGS></ButtonGS>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
