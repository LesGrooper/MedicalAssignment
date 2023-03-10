import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/server/patients";

const getData = async (cb) => {
  try {
    let patients = await axios({
      method: "GET",
      url: URL,
    });
    cb(patients.data);
  } catch (error) {
    // console.log(error)
    console.status(500).json(error);
  }
};

const addData = async (patient) => {
  try {
    let patients = await axios({
      method: "POST",
      url: URL + `/create`,
      data: patient,
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data has been saved',
      showConfirmButton: false,
      timer: 1500
    })

    console.log(patients.data);
  } catch (error) {
    console.status(500).json(error);
  }
};

const deleteData = async (id) => {
  try {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        let patients = await axios({
          method: "DELETE",
          url: URL + `/delete/` + id,
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    // console.log(patients);
  } catch (error) {
    console.status(500).json(error);
  }
};

const getDataById = async (id, cb) => {
  try {
    let patients = await axios({
      method: "GET",
      url: URL + "/detail/" + String(id),
    });
    // console.log(patients)
    cb(patients.data);
  } catch (error) {
    console.status(500).json(error);
  }
};

const editData = async (id, patient) => {
  try {
    let patients = await axios({
      method: "PUT",
      url: URL + `/update/` + String(id),
      data: patient,
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data has been saved',
      showConfirmButton: false,
      timer: 1500
    })

    console.log(patients.data);
  } catch (error) {
    console.status(500).json(error);
  }
};

export { getData, addData, deleteData, getDataById, editData };
