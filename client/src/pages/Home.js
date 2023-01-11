import React from "react";
import { Link } from "react-router-dom";
import { FaHospitalUser, FaUserNurse, FaHospital } from "react-icons/fa";
import { GiPlagueDoctorProfile } from "react-icons/gi";

const Home = () => {
  return (
    <>
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
                    >
                      <FaHospitalUser />
                    </Link>
                  </div>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                      to=""
                      className="list-group-item list-group-item-action active"
                    >
                      <GiPlagueDoctorProfile />
                    </Link>
                  </div>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                      to=""
                      className="list-group-item list-group-item-action active"
                    >
                      <FaHospital />
                    </Link>
                  </div>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                      to=""
                      className="list-group-item list-group-item-action active"
                    >
                      <FaUserNurse />
                    </Link>
                  </div>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
