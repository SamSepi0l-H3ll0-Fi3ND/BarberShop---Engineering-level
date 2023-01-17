import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import API from "../env";

const LoginForm = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState();
  async function login(e) {
    e.preventDefault();
    const setCookies = new Cookies();
    const formData = new FormData(e.target);
    try {
      const response = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email").valueOf(),
          password: formData.get("password").valueOf(),
        }),
      });
        const token = await response.text();
        localStorage.setItem("TOKEN", token);
        navigate("/dashboard");
      
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form onSubmit={login}>
      <div class="form-control space-y-4">
        <label class="input-group input-group-vertical">
          <span>Email</span>
          <input
            type="text"
            name="email"
            placeholder="info@site.com"
            class="input input- border-main-red"
          />
        </label>
        <label class="input-group input-group-vertical ">
          <span>Password</span>
          <input
            type="password"
            name="password"
            class="input input-group-vertical border-main-red"
          />
        </label>
        <button class="btn btn-ghost border-main-red">Log in</button>
      </div>
    </form>
  );
};

export default LoginForm;
