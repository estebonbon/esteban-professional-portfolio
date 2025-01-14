import { Link } from "react-router-dom";
import logo from "../assets/esteban-logo.png";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center py-6 mx-auto px-8 max-w-7xl">
      {/* Logo Section */}
      <div className="flex shrink-0 items-center justify-center md:justify-start w-full md:w-auto">
        <a href="/" aria-label="Esteban Logo Button">
          <img src={logo} className="" width={150} height={63} alt="Esteban Logo" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center md:justify-end gap-4 mt-4 w-full md:mt-0">
        <Link to="/" aria-label="Home Button" className="text-stone-300 hover:text-white hover:underline">
          Home
        </Link>
        <Link to="/about" aria-label="About Me Button"className="text-stone-300 hover:text-white hover:underline">
          About Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

