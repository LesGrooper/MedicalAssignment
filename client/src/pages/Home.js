import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaHospitalUser, FaUserNurse, FaHospital } from "react-icons/fa";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import NavbarContent from "../components/NavbarContent";
import { Patient, Doctor, Ward, Assistant } from "../pages";

const Home = (props) => {
  const { loginStatus, loginCbHandler } = props;

  return (
    <>
      <NavbarContent
        loginStatus={loginStatus}
        loginCbHandler={loginCbHandler}
      />

        <div className="home my-1">
          <div className="w-200 text-center">
            <h1>Home Medical Assignment</h1>
            <p>Weclome To Medical Assignment Apps</p>
          </div>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card text-bg-danger mb-3">
                  <div className="card-body">
                    <h5 className="card-title text-center">List Pasien</h5>
                    <div className="card-header home-icons text-center">
                      <Link
                        to="/patients"
                        className="list-group-item list-group-item-action active"
                        element={<Patient/>}
                      >
                        <FaHospitalUser />
                      </Link>
                    </div>
                    <p className="card-text text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card text-bg-danger mb-3">
                  <div className="card-body">
                    <h5 className="card-title text-center">List Dokter</h5>
                    <div className="card-header home-icons text-center">
                      <Link
                        to="/doctors"
                        className="list-group-item list-group-item-action active"
                        element={<Doctor/>}
                      >
                        <GiPlagueDoctorProfile />
                      </Link>
                    </div>
                    <p className="card-text text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card text-bg-danger mb-3">
                  <div className="card-body">
                    <h5 className="card-title text-center">List Tempat</h5>
                    <div className="card-header home-icons text-center">
                      <Link
                        to="/wards"
                        className="list-group-item list-group-item-action active"
                        element={<Ward/>}
                      >
                        <FaHospital />
                      </Link>
                    </div>
                    <p className="card-text text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card text-bg-danger mb-3">
                  <div className="card-body">
                    <h5 className="card-title text-center">List Perawat</h5>
                    <div className="card-header home-icons text-center">
                      <Link
                        to="/assistants"
                        className="list-group-item list-group-item-action active"
                        element={<Assistant />}
                      >
                        <FaUserNurse />
                      </Link>
                    </div>
                    <p className="card-text text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;
