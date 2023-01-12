import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/server/wards";

const getData = async (cb) => {
  try {
    let wards = await axios({
      method: "GET",
      url: URL,
    });
    cb(wards.data);
  } catch (error) {
    console.status(500).json(error);
  }
};

const addData = async (ward) => {
  try {
    let wards = await axios({
      method: "POST",
      url: URL + `/create`,
      data: ward,
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data has been saved',
      showConfirmButton: false,
      timer: 1500
    })
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
        let wards = await axios({
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
    let wards = await axios({
      method: "GET",
      url: URL + "/detail/" + String(id),
    });
    // console.log(wards)
    cb(wards.data);
  } catch (error) {
    console.status(500).json(error);
  }
};

const editData = async (id, ward) => {
  try {
    let wards = await axios({
      method: "PUT",
      url: URL + `/update/` + String(id),
      data: ward,
    });

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    
  } catch (error) {
    console.status(500).json(error);
  }
};

export { getData, addData, deleteData, getDataById, editData };
