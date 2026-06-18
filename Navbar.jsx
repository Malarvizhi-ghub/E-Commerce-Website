
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.jpg';
function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img
            src={logo}
            alt="logo"
            width="40"
            className="me-2"
          />
          SHOPMATE
        </Link>

        <div>
          <Link
            className="btn btn-outline-light me-2"
            to="/"
          >
            Home
          </Link>

          <Link
            className="btn btn-warning"
            to="/cart"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;