import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

const NavbarContent = (props) => {
  const { loginStatus, loginCbHandler } = props;

  const loginHandler = () => {
    loginCbHandler(true);
  };

  const logoutHandler = () => {
    localStorage.clear();
    loginCbHandler(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="btn">
            <img
              className="img-fluid rounded"
              src="https://www.nicepng.com/png/full/43-433284_medical-png.png"
              alt=""
            />
          </Link>
          <div className="d-flex mx-4">
            {!loginStatus ? (
              <a className="btn nav-link" onClick={() => loginHandler()}>
                Login
              </a>
            ) : (
              <a className="btn nav-link" onClick={() => logoutHandler()}>
                Logout
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarContent;
