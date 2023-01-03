const UserList = () => {
  const user = {
    FirstName: "Jakub",
    LastName: "Figzał",
    Number: "875 328 743",
    Email: "kubafigzal@gmail.com",
  };
  return (
    <div className="card p-4 w-full bg-main-dark rounded-none md:w-9/12">
      <p className="text-4xl text-white">List of users </p>
      <p className="text-xl mt-2 mb-4">
        {" "}
        These are the people who enjoyed your work!
      </p>
      <div className="grid grid-cols-4 gap-4 place-items-center text-white text-2xl underline underline-offset-4 decoration-main-red">
        <p>FirstName</p>
        <p>LastName</p>
        <p>Number</p>
        <p>Email</p>
      </div>
      <div className="overflow-y-scroll h-116">
        <div className="grid grid-cols-4 gap-4 place-items-center text-white text-xl mt-6">
          <div>{user.FirstName}</div>
          <div>{user.LastName}</div>
          <div>{user.Number}</div>
          <div>{user.Email}</div>
        </div>
        <div className="grid grid-cols-4 gap-4 place-items-center text-white text-xl mt-6">
          <div>{user.FirstName}</div>
          <div>{user.LastName}</div>
          <div>{user.Number}</div>
          <div>{user.Email}</div>
        </div>
        <div className="grid grid-cols-4 gap-4 place-items-center text-white text-xl mt-6">
          <div>{user.FirstName}</div>
          <div>{user.LastName}</div>
          <div>{user.Number}</div>
          <div>{user.Email}</div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
