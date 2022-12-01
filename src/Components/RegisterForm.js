const RegisterForm = () => {
  return (
    <div class="form-control space-y-4">
      <label class="input-group input-group-vertical">
        <span>Name</span>
        <input type="text" class="input input- border-main-red" />
      </label>
      <label class="input-group input-group-vertical">
        <span>Surname</span>
        <input type="text" class="input input- border-main-red" />
      </label>
      <label class="input-group input-group-vertical">
        <span>Email</span>
        <input type="text" placeholder="yourmail@mail.com" class="input input- border-main-red" />
      </label>
      <label class="input-group input-group-vertical">
        <span>Telephone</span>
        <input type="number" placeholder="+48 532 432 123" class="input input- border-main-red" />
      </label>
      <label class="input-group input-group-vertical ">
        <span>Password</span>
        <input
          type="password"
          class="input input-group-vertical border-main-red"
        />
      </label>
      <button class="btn btn-ghost border-main-red">Register</button>
    </div>
  );
};

export default RegisterForm;
