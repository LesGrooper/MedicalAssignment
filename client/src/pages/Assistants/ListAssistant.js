import React, {useState, useEffect} from 'react'
import LoadingBar from '../../helpers/LoadingBar';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import {getData, deleteData} from '../../axios/assistantAxios'

function ListAssistant() {
    const [assistants, setAssistants] = useState([])

    useEffect(() => {
      getData((result) => setAssistants(result));
    }, []);
  
    const navigate = useNavigate();
    const deleteHandler = (id) => {
      navigate("/assistants");
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
              <th>Password</th>
              <th>Address</th>
              {/* <th>Seen By</th>
              <th>Doctor Name</th>
              <th>Medicine</th>
              <th>Ward</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table table-info">
            {assistants.length > 0 ? (
              assistants.map((e) => {
                const { id } = e;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      <Link to={`/assistants/detail/${id}`}>{e.name}</Link>
                    </td>
                    <td>{e.password}</td>
                    <td>{e.address}</td>
                    {/* {e.PatientMedicate.map((i) => (
                        <td>{i.seen_by}</td>
                    ))} */}
                    <td>
                      <Link
                      className="btn btn-light"
                      to={`/assistants/update/${id}`}
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
          <Link to="/assistants/create" className="btn btn-primary">
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

export default ListAssistant