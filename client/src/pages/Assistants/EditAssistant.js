import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editData, getDataById } from '../../axios/assistantAxios';

function EditAssistant() {
  const [form, setForm] = useState({
    name: "",
    password: 0,
    address: "",
  });

  const navigate = useNavigate();
  const params = useParams();

  const getDataInfo = () => {
    const { id } = params;
    getDataById(+id, (patient) => {
      setForm({
        name: patient.name,
        password: patient.password,
        address: patient.address,
      });
      console.log(patient);
    });
  };

  useEffect(() => {
    getDataInfo();
  }, []);

  const submitHandler = () => {
    editData(+params.id, form);
    navigate("/assistants");
  };


  return (
    <>
       <div className="row my-3">
        <div className="w-100 text-center">
          <h2>Edit Data Patient</h2>
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
            <label>Password:</label>
            <input
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
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
            <button className="btn btn-success" onClick={() => submitHandler()}>
              Submit
            </button>
            <Link className="btn btn-light mx-3" to="/assistants">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditAssistant