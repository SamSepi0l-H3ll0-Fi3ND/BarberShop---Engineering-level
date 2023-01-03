import { Link } from "react-router-dom";

const Service = ({ data }) => {
  const { title, description, price } = data;

  return (
    <div class="card w-11/12 mt-2 bg-[#171017] shadow-xl">
      <div class="flex flex-row card-body border-2 border-main-red rounded-xl h-full sm:gird-cols-1">
        <div className="flex flex-col w-5/12">
          <span class="text-white font-bold ">{title}</span>
          <p className="truncate w-full ... 2xl:text-clip">{description}</p>
          <span>
            <label for="my-modal-4" class="btn btn-sm">
              ...
            </label>
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
              <label class="modal-box relative bg-main-dark" for="">
                <h3 class="text-lg font-bold text-white">{title}</h3>
                <div className="flex flex-nowrap py-4">
                  <p class="">{description}</p>
                  <span className="text-white">{price} zł</span>
                </div>
                <button className="btn btn-error btn-outline mr-2">
                  Add to favourites
                </button>
                <button className="btn btn-success">Make arrange</button>
              </label>
            </label>
          </span>
        </div>
        <div className="flex items-center justify-end w-full">
          <span className="mr-4 text-white hidden md:inline-flex">
            {price} zł
          </span>
          <span>
            <label for="my-modal-3" class="btn btn-outline text-white">
              Arrange
            </label>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <label for="my-modal-3" class="modal cursor-pointer">
              <label
                class="modal-box relative bg-main-dark card card-side"
                for=""
              >
                <div className="card-body">
                  <p className="card-title text-2xl text-white">Arrange </p>
                  <p className="text-xl mt-2"> Make your arrange now!</p>

                  <h3 class="text-lg font-bold text-white mt-8">{title}</h3>
                  <div className="flex flex-nowrap ">
                    <p class="">{description}</p>
                    <span className="text-white">{price} zł</span>
                  </div>
                  <input
                    type="datetime-local"
                    className="rounded-md mt-2 mb-2"
                  />
                  <div className="card-actions justify-end">
                    <button className="btn btn-success w-full">
                      Make arrange
                    </button>
                  </div>
                </div>
              </label>
            </label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Service;
