import React, {useEffect, useState} from 'react'
import { DataGrid, GridToolbarExport } from '@mui/x-data-grid';
import { getDataById } from '../../axios/wardAxios';
import { Link, useParams } from 'react-router-dom';


const DetailWard = () => {
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const params = useParams;

  const getDataInfo = () => {
    const { id } = params;
    getDataById(+id, (ward) => {
      setTableData({
        name: ward.name,
        category: ward.category,
        availability: ward.availability,
        assustantId: +ward.assustantId,
      });
      console.log(ward);
    });
  };

  useEffect(() => {
    getDataInfo();
  }, []);

  const columns = [
    { field: "id", headerName: "id" },
    { field: "name", headerName: "Name", width: 250 },
    { field: "category", headerName: "Category", width: 300 },
    { field: "availability", headerName: "Availability", width: 100 },
    { field: "assistantId", headerName: "AssistantId", width: 100 },
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
        <Link to="/wards" className="btn btn-light">
          Back
        </Link>
      </div>
    </>
  );
}

export default DetailWard