import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addData } from "../../axios/patientAxios";
// import { useNavigate } from 'react-router-dom'

const CreatePatient = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    age: 0,
  });

  // const navigate = useNavigate();

  const submitHandler = () => {
    addData(form);
  };

  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <h2>Create Data Patient</h2>
        </div>
        <div className="w-75 mx-auto">
          <div className="mb-3">
            <label>Name:</label>
            <input
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Address:</label>
            <input
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Age:</label>
            <input
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <button className="btn btn-success" onClick={() => submitHandler()}>
              Submit
            </button>
            <Link className="btn btn-light mx-3" to="/">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePatient;
