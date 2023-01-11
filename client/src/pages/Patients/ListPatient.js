import React, { useState, useEffect } from "react";
import LoadingBar from "../../helpers/LoadingBar";
import { Link, useNavigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

import { getData,deleteData } from "../../axios/patientAxios";

const ListPatient = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getData((result) => setPatients(result));
  }, []);

  const navigate = useNavigate();
  const deleteHandler = (id) => {
    navigate('/patients/')
    deleteData(id)
  }

  return (
    <>
      <div className="w-100">
        <table className="table table-hover table-rounded">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Age</th>
              {/* <th>Seen By</th>
              <th>Doctor Name</th>
              <th>Medicine</th>
              <th>Ward</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table table-info">
            {patients.length > 0 ? (
              patients.map((e) => {
                const {id} = e
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td><Link>{e.name}</Link></td>
                    <td>{e.address}</td>
                    <td>{e.age}</td>
                    {/* {e.PatientMedicate.map((i) => (
                        <td>{i.seen_by}</td>
                    ))} */}
                    <td>
                      <button 
                      onClick={() =>deleteHandler(id)}
                      className="btn btn-outline-danger btn-sm">
                        Delete Data
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <LoadingBar />
            )}
          </tbody>
        </table>
        <div className="d-flex">
                <Link to="/patients/create" className="btn btn-primary">
                <FaPlusCircle/>
                <br/>
                Add Patient's
                </Link>
        </div>
      </div>
    </>
  );
};

export default ListPatient;
