const Motto = () => {
  return (
    <div className="h-5/6 bg-main-gray pt-24">
      <p className="absolute invisible text-main-red lg:visible  ml-32 my-4">
        {" "}
        Rzeczy którymi się kierujemy
      </p>

      <div className="flex justify-center flex-row ">
        <hr className="border-main-red w-1/3 mx-4 my-4"></hr>
        <p className="text-white text-4xl text-center px-24"> Motto </p>
        <hr className="border-main-red w-1/3 mx-4 my-4"></hr>
      </div>
      <div className="flex justify-center mt-8 ">
        <p className="w-2/5 text-center mb-8">
          My robimy byle jak, wszystko na trytkę i po swojemu, ale taniej od konkurencji czyli najlepiej. 
        </p>
      </div>
      <div className="flex justify-center pt-8 pb-8">
        <div className=" border-2 border-l-main-red h-24 border-r-transparent border-t-transparent border-b-transparent rounded-full mb-8"></div>
      </div>
    </div>
  );
};

export default Motto;
