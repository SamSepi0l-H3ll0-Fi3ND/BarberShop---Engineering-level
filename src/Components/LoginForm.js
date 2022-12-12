import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div class="form-control space-y-4">
      <label class="input-group input-group-vertical">
        <span>Email</span>
        <input
          type="text"
          placeholder="info@site.com"
          class="input input- border-main-red"
        />
      </label>
      <label class="input-group input-group-vertical ">
        <span>Password</span>
        <input
          type="password"
          class="input input-group-vertical border-main-red"
        />
      </label>
      <Link to="../dashboard">
        <button class="btn btn-ghost border-main-red">Log in</button>
      </Link>
    </div>
  );
};

export default LoginForm;
