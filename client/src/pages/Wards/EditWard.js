import React, {useState, useEffect}  from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editData, getDataById } from '../../axios/wardAxios';

const EditWard = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    availability: 0,
    assistantId: 0,
  });

  const navigate = useNavigate();
  const params = useParams();

  const getDataInfo = () => {
    const { id } = params;
    getDataById(+id, (ward) => {
      setForm({
        name: ward.name,
        category: ward.category,
        availability: +ward.availability,
        assistantId: +ward.assistantId,
      });
      console.log(ward);
    });
  };

  useEffect(() => {
    getDataInfo();
  }, []);

  const submitHandler = () => {
    editData(+params.id, form);
    navigate("/wards");
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <h2>Edit Data Ward</h2>
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
            <label>Category:</label>
            <input
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Availability:</label>
            <input
              value={form.availability}
              onChange={(e) => setForm({ ...form, availability: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Assistant ID:</label>
            <input
              value={form.assistantId}
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

export default EditWard