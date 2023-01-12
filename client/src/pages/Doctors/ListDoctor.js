import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoadingBar from '../../helpers/LoadingBar';
import { FaPlusCircle } from "react-icons/fa";
import { deleteData, getData } from '../../axios/doctorAxios';

const ListDoctor = () => {
    const [doctors, setDoctors] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getData((data) => setDoctors(data))
    }, [])

    const deleteHandler= (id) => {
        navigate('/doctors')
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
              <th>Experties</th>
              {/* <th>Seen By</th>
              <th>Doctor Name</th>
              <th>Medicine</th>
              <th>Ward</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table table-info">
            {doctors.length > 0 ? (
              doctors.map((e) => {
                const { id } = e;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      <Link to={`/doctors/detail/${id}`}>{e.name}</Link>
                    </td>
                    <td>{e.address}</td>
                    <td>{e.experties}</td>
                    {/* {e.PatientMedicate.map((i) => (
                        <td>{i.seen_by}</td>
                    ))} */}
                    <td>
                      <Link
                      className="btn btn-light"
                      to={`/doctors/update/${id}`}
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
          <Link to="/doctors/create" className="btn btn-primary">
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

export default ListDoctor