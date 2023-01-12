import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { addData } from '../../axios/wardAxios';

const CreateWard = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    availability: 0,
    assistantId: 0,
  });

  // const navigate = useNavigate();

  const submitHandler = () => {
    addData(form);
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <h2>Create Data Wards</h2>
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
            <label>Category:</label>
            <input
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Availability:</label>
            <input
              onChange={(e) => setForm({ ...form, availability: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Assistant ID:</label>
            <input
              onChange={(e) => setForm({ ...form, assistantId: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <button className="btn btn-success" onClick={() => submitHandler()}>
              Submit
            </button>
            <Link className="btn btn-light mx-3" to="/wards">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateWard