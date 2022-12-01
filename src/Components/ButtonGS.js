import { Link } from "react-router-dom";
const ButtonGS = () => {
  return (
    <Link to="/register">
      <button class="btn btn-wide btn-ghost w-48 text-main-red font-light uppercase border-solid border-main-red rounded-none ">
        Getting started
      </button>
    </Link>
  );
};

export default ButtonGS;
