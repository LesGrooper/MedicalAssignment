import axios from "axios";
// import Swal from "sweetalert2";

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
        })

        console.log(patients.data)
    } catch (error) {
        console.status(500).json(error)
    }
}

const deleteData = async (id) => {
    try {
        let patients = await axios({
            method: "DELETE",
            url: URL + `/delete/` + id,
        })
        console.log(patients)
    } catch (error) {
        console.status(500).json(error)
    }
}


export {
    getData,addData, deleteData
}