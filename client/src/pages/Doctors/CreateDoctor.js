import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { addData } from '../../axios/doctorAxios'

function CreateDoctor() {
    const [form, setForm] = useState({
        name: "",
        address: "",
        experties: 0,
      });

      const submitHandler = () => {
        addData(form);
      };
    

    
    return (
    <div className="row my-3">
    <div className="w-100 text-center">
      <h2>Create Data Doctor</h2>
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
        <label>Experties:</label>
        <input
          onChange={(e) => setForm({ ...form, experties: e.target.value })}
          type="text"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <button className="btn btn-success" onClick={() => submitHandler()}>
          Submit
        </button>
        <Link className="btn btn-light mx-3" to="/doctors">
          Back
        </Link>
      </div>
    </div>
  </div>
  )
}

export default CreateDoctor