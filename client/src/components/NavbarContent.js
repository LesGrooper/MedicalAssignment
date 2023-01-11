import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";


const NavbarContent = () => {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to="/" className="btn btn-light">Home</Link>
          </div>
          <div className="d-flex">
                <Link className="btn btn-light position-relative">
                    Logout
                </Link>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" />
        </Routes>
      </Router>
    </>
  );
};

export default NavbarContent;
