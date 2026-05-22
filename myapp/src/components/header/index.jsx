import logo from "../../assets/react.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="app_header">
      <div className="app_logo_container">
        <img className="logo" src={logo} />
        <span className="logo_title">My App</span>
      </div>
      <div>
        <nav className="navbar">
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
