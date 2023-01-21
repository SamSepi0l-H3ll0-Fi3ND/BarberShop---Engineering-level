
const DashboardNavbar = () => {
  return (
    <div className="flex justify-start gap-4 flex-row w-full h-24 bg-main-dark border-main-red border-b-2 border-l-0 border-t-0 rounded-r-lg">
      <div className="self-center ml-20 my-4 text-3xl md:text-5xl font-bold cursor-pointer">
        <span className="text-white">Barber</span>
        <span className="text-main-red">Shop</span>
      </div>
      <div className="self-center text-white hidden md:flex">
      Your idea, our implementation
      </div>
    </div>
  );
};

export default DashboardNavbar;
