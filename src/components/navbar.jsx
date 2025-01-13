import logo from "../assets/esteban-logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center py-6 lg:justify-start justify-center">
      {/* Logo Section */}
      <div className="flex shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="" width={150} height={63} alt="Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;


