import React,{useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editData, getDataById } from '../../axios/doctorAxios'


const EditDoctor = () => {
    const [form, setForm] = useState({
        name: "",
        address: "",
        experties: 0,
      });

      const navigate = useNavigate();
  const params = useParams();

  const getDataInfo = () => {
    const { id } = params;
    getDataById(+id, (doctor) => {
      setForm({
        name: doctor.name,
        address: doctor.address,
        experties: +doctor.age,
      });
      console.log(doctor);
    });
  };

  useEffect(() => {
    getDataInfo();
  }, []);

  const submitHandler = () => {
    editData(+params.id, form);
    navigate("/doctors");
  };

  return (
    <>
         <div className="row my-3">
        <div className="w-100 text-center">
          <h2>Edit Data Doctors</h2>
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
            <label>Experties:</label>
            <input
              value={form.experties}
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
    </>
  )
}

export default EditDoctor