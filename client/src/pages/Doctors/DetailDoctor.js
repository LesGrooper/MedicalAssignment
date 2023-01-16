import React, {useState, useEffect} from 'react'
import { DataGrid, GridToolbarExport } from '@mui/x-data-grid';
import { getDataById } from '../../axios/doctorAxios';
import { Link, useParams } from 'react-router-dom';

const DetailDoctor = () => {
    const [tableData, setTableData] = useState([]);
    const [pageSize, setPageSize] = useState(5);
    const params = useParams;
  
    const getDataInfo = () => {
      const { id } = params;
      getDataById(+id, (doctor) => {
        setTableData({
          name: doctor.name,
          address: doctor.address,
          age: +doctor.age,
        });
        console.log(doctor);
      });
    };
  
    useEffect(() => {
      getDataInfo();
    }, []);
  
    useEffect((id) => {
      fetch(`https://localhost:3000/server/doctors/detail/${id}`)
       .then((data) => data.json(getDataById))
       .then((data) => setTableData(data))
    }, [])
  
    const columns = [
      { field: "id", headerName: "id" },
      { field: "name", headerName: "Name", width: 300 },
      { field: "address", headerName: "Address", width: 250 },
      { field: "experties", headerName: "Experties", width: 150 },
      {
        field: "PatientMedicate",
        headerName: "Patient Medicate",
        width: 200,
        valueGetter: (tableData) => tableData.row.PatientMedicate.seen_by,
      }
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
          <Link to="/doctors" className="btn btn-light">
            Back
          </Link>
        </div>
      </>
    );
}

export default DetailDoctor