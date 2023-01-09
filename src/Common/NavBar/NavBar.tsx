import "./navbar.css";

const NavBar = ({ title, showBackBtn = true }: any) => {
  return (
    <nav className="navbar">
      {showBackBtn && <div className="navbar-back-btn-box"></div>}
      <div className="navbar-heading-container">
        <div className="navbar-heading">{title}</div>
      </div>
    </nav>
  );
};

export default NavBar;
