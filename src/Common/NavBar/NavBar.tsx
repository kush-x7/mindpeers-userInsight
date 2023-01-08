import "./navbar.css";

const NavBar = ({ title }: any) => {
  return (
    <nav className="navbar">
      <div className="navbar-back-btn-box"></div>
      <div className="navbar-heading">{title}</div>
    </nav>
  );
};

export default NavBar;
