import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editData, getDataById } from "../../axios/patientAxios";

const EditPatient = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    age: 0,
  });

  const navigate = useNavigate();
  const params = useParams();

  const getDataInfo = () => {
    const { id } = params;
    getDataById(+id, (patient) => {
      setForm({
        name: patient.name,
        address: patient.address,
        age: +patient.age,
      });
      console.log(patient);
    });
  };

  useEffect(() => {
    getDataInfo();
  }, []);

  const submitHandler = () => {
    editData(+params.id, form);
    navigate("/patients");
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
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Address:</label>
            <input
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Age:</label>
            <input
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <button className="btn btn-success" onClick={() => submitHandler()}>
              Submit
            </button>
            <Link className="btn btn-light mx-3" to="/patients">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPatient;
