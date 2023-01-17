const HeroSummit = () => {
  return (
    <div class="grid grid-cols-3 clear-left gap-6 h-3/6 text-white md:content-center lg: ml-16">
      <div class="card sm:">
        <h2 class="card-title">
          <span>
            <span className="underline decoration-main-red underline-offset-8 ">
              Stylishl
            </span>
            y
          </span>
        </h2>
        <p className="w-full lg:w-2/4 invisible sm:visible">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil
          distinctio delectes
        </p>
      </div>
      <div class="card">
        <h2 class="card-title">
          <span>
            <span className="underline decoration-main-red underline-offset-8 ">
              Precise
            </span>
            ly
          </span>
        </h2>
        <p className="w-full lg:w-2/4 invisible sm:visible">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          facere.
        </p>
      </div>
      <div class="card">
        <h2 class="card-title">
          <span>
            <span className="underline decoration-main-red underline-offset-8 ">
              Just like yo
            </span>
            u want
          </span>
        </h2>
        <p className="w-full lg:w-2/4 invisible sm:visible">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectes et nihil.
        </p>
      </div>
    </div>
  );
};

export default HeroSummit;
