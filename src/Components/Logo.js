import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="Logo text-3xl md:text-5xl font-bold cursor-pointer">
        <span className="text-white">Barber</span>
        <span className="text-main-red">Shop</span>
      </div>
    </Link>
  );
};

export default Logo;
