import React, {useState, useEffect} from 'react'
import LoadingBar from '../../helpers/LoadingBar';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import {getData, deleteData} from '../../axios/wardAxios';



const ListWard = () => {
  const [wards, setWards] = useState([]);

  useEffect(() => {
    getData((result) => setWards(result));
  }, []);

  const navigate = useNavigate();
  const deleteHandler = (id) => {
    navigate("/wards");
    deleteData(id);
  };

  return (
    <>
            <div className="w-100">
        <table className="table table-hover table-rounded">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Availability</th>
              <th>Assistant ID</th>
              {/* <th>Seen By</th>
              <th>Doctor Name</th>
              <th>Medicine</th>
              <th>Ward</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table table-info">
            {wards.length > 0 ? (
              wards.map((e) => {
                const { id } = e;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      <Link to={`/wards/detail/${id}`}>{e.name}</Link>
                    </td>
                    <td>{e.category}</td>
                    <td>{e.availability}</td>
                    <td>{e.assistantId}</td>
                    {/* {e.PatientMedicate.map((i) => (
                        <td>{i.seen_by}</td>
                    ))} */}
                    <td>
                      <Link
                      className="btn btn-light"
                      to={`/wards/update/${id}`}
                      >Update Data</Link>
                      <button
                        onClick={() => deleteHandler(id)}
                        className="btn btn-outline-danger btn-sm"
                      >
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
          <Link to="/wards/create" className="btn btn-primary">
            <FaPlusCircle />
            <br />
            Add Data
          </Link>
          <Link to="/" className="btn btn-light mx-4">
            Back
          </Link>
        </div>
      </div>
    </>
  )
}

export default ListWard