import axios  from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/server/doctors";

const getData = async (cb) => {
  try {
    let doctors = await axios({
      method: "GET",
      url: URL,
    });
    cb(doctors.data);
  } catch (error) {
    // console.log(error)
    console.status(500).json(error);
  }
};

const addData = async (doctor) => {
  try {
    let doctors = await axios({
      method: "POST",
      url: URL + `/create`,
      data: doctor,
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data has been saved',
      showConfirmButton: false,
      timer: 1500
    })

    console.log(doctors.data);
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
        let doctors = await axios({
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
  } catch (error) {
    console.status(500).json(error);
  }
};

const getDataById = async (id, cb) => {
  try {
    let doctors = await axios({
      method: "GET",
      url: URL + "/detail/" + String(id),
    });
    // console.log(doctors)
    cb(doctors.data);
  } catch (error) {
    console.status(500).json(error);
  }
};

const editData = async (id, doctor) => {
  try {
    let doctors = await axios({
      method: "PUT",
      url: URL + `/update/` + String(id),
      data: doctor,
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data has been saved',
      showConfirmButton: false,
      timer: 1500
    })

    console.log(doctors.data);
  } catch (error) {
    console.status(500).json(error);
  }
};

export {
    getData, deleteData, editData, getDataById,addData
}