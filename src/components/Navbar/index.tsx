import { Link } from "react-router-dom";

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar main-nav">
      <Link to="/" className="nav-logo-text">
        <h4 className="text-primary">ViaCEP</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
