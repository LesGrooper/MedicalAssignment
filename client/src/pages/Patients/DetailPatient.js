import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbarExport } from "@mui/x-data-grid";
import { getDataById } from "../../axios/patientAxios";
import { Link, useParams } from "react-router-dom";

function DetailPatient() {
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const params = useParams;

  const getDataInfo = () => {
    const { id } = params;
    getDataById(+id, (patient) => {
      setTableData({
        name: patient.name,
        address: patient.address,
        age: +patient.age,
      });
      console.log(patient);
    });
  };

  useEffect(() => {
    getDataInfo();
  }, []);

  useEffect((id) => {
    fetch(`https://localhost:3000/server/patients/detail/${id}`)
     .then((data) => data.json(getDataById))
     .then((data) => setTableData(data))
  }, [])

  const columns = [
    { field: "id", headerName: "id" },
    { field: "name", headerName: "Name", width: 250 },
    { field: "address", headerName: "Address", width: 300 },
    { field: "age", headerName: "Age", width: 100 },
    {
      field: "PatientMedicate",
      headerName: "Patient Medicate",
      width: 200,
      valueGetter: (tableData) => tableData.row.PatientMedicate.seen_by,
    },
    {
      field: "PatientTreat",
      headerName: "Patient Treat",
      width: 200,
      valueGetter: (tableData) => tableData.row.PatientTreat.medicine,
    },
  ];

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 20]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          components={{ Toolbar: GridToolbarExport }}
        />
      </div>
      <div className="d-flex">
        <Link to="/patients" className="btn btn-light">
          Back
        </Link>
      </div>
    </>
  );
}

export default DetailPatient;
