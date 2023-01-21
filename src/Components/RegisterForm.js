
import { useNavigate } from "react-router-dom";
import API from "../env";

const RegisterForm = () => {
  const navigate = useNavigate();
  async function Register(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    try {
      const response = await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formdata.get("firstName").valueOf(),
          lastName: formdata.get("lastName").valueOf(),
          email: formdata.get("email").valueOf(),
          number: formdata.get("number").valueOf(),
          password: formdata.get("password").valueOf(),
        }),
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form onSubmit={Register}>
      <div class="form-control space-y-4">
        <label class="input-group input-group-vertical">
          <span>First name</span>
          <input
            required
            placeholder="Type your first name"
            type="text"
            name="firstName"
            class="input input- border-main-red"
          />
        </label>
        <label class="input-group input-group-vertical">
          <span>Last Name</span>
          <input
          required
           placeholder="Type your last name"
            type="text"
            name="lastName"
            class="input input- border-main-red"
          />
        </label>
        <label class="input-group input-group-vertical">
          <span>Email</span>
          <input
          required
            type="text"
            name="email"
            placeholder="yourmail@mail.com"
            class="input input- border-main-red"
          />
        </label>
        <label class="input-group input-group-vertical">
          <span>Telephone</span>
          <input
          required
            type="number"
            name="number"
            placeholder="+48 532 432 123"
            class="input input- border-main-red"
          />
        </label>
        <label class="input-group input-group-vertical ">
          <span>Password</span>
          <input
          required
            type="password"
            name="password"
            class="input input-group-vertical border-main-red"
          />
        </label>
        <button class="btn btn-ghost border-main-red">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
