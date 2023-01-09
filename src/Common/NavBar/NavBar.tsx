import "./navbar.css";

const NavBar = ({ title, showBackBtn = true }: any) => {
  const customStyle = {
    marginRight: showBackBtn ? "40px" : "",
  };

  return (
    <nav className="navbar">
      {showBackBtn && <div className="navbar-back-btn-box"></div>}
      <div className="navbar-heading-container" style={customStyle}>
        <div className="navbar-heading">{title}</div>
      </div>
    </nav>
  );
};

export default NavBar;
