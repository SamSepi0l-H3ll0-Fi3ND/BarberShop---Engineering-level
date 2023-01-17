const User = ({ user }) => {
  const {firstName, lastName, number, email} = user;
  return (
    <div className="grid grid-cols-5 gap-2 place-items-center text-white text-xl mt-6">
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{number}</div>
      <div>{email}</div>
      <button className="btn btn-error btn-sm">Usuń</button>
    </div>
  );
};

export default User;
