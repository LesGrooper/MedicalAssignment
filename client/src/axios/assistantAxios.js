import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/server/assistants";

const getData = async (cb) => {
  try {
    let assistants = await axios({
      method: "GET",
      url: URL,
    });
    cb(assistants.data);
  } catch (error) {
    // console.log(error)
    console.status(500).json(error);
  }
};

const addData = async (assistant) => {
  try {
    let assistants = await axios({
      method: "POST",
      url: URL + `/create`,
      data: assistant,
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
        let assistants = await axios({
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
    let assistants = await axios({
      method: "GET",
      url: URL + "/detail/" + String(id),
    });
    // console.log(assistants)
    cb(assistants.data);
  } catch (error) {
    console.status(500).json(error);
  }
};

const editData = async (id, assistant) => {
  try {
    let assistants = await axios({
      method: "PUT",
      url: URL + `/update/` + String(id),
      data: assistant,
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
