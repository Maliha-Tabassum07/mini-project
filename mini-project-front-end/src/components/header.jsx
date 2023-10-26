import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log("Pore role: " + role);
  const userId = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark custom-navbar">
      <Link className="navbar-brand text-light" to="/">
        Book Worm
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon text-light"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
          </li>
          {!token && (
            <>
              <li className="nav-item">
                <Link to="/register" className="nav-link text-light">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-light">
                  Login
                </Link>
              </li>
            </>
          )}
          {token && role === "CUSTOMER" && (
            <>
              <li className="nav-item">
                <Link to="/book/all" className="nav-link text-light">
                  All Books
                </Link>
              </li>
            </>
          )}
          {token && role === "CUSTOMER" && (
            <>
              <li className="nav-item">
                {/* <Link to="/book/all" className="nav-link text-light">
                  All Books
                </Link> */}
                <Link
                  to={`/${userId}/current/borrow`}
                  className="nav-link text-light"
                >
                  Dashboard
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  to={`user/${userId}/history`}
                  className="nav-link text-light"
                >
                  History
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link to={`/user/${userId}`} className="nav-link text-light">
                  Profile
                </Link>
              </li> */}
            </>
          )}
          {/* {token && role === "ADMIN" && (
            <>
              <li className="nav-item">
                <Link to="/user" className="nav-link text-light">
                  UserList
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users/search" className="nav-link text-light">
                  Search User
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/book/create" className="nav-link text-light">
                  Add Book
                </Link>
              </li>
            </>
          )} */}
          {token && role === "CUSTOMER" && (
            <Dropdown className="custom-dropdown">
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Account
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to={`/user/${userId}`}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={`user/${userId}/history`}>
                  History
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {token && role === "ADMIN" && (
            <Dropdown className="custom-dropdown">
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Book Management
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/book/all">
                  Book List
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/book/create">
                  Create Book
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {token && role === "ADMIN" && (
            <Dropdown className="custom-dropdown">
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                User Management
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/user">
                  User List
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/users/search">
                  Search User
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {token && (
            <li className="nav-item ml-auto">
              <Link
                to="/login"
                className="nav-link text-light"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
