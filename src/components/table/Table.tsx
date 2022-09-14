import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export default function DataTable({ users }: any) {

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 110 },
    { field: "ism", headerName: "ISM FAMILIYA", width: 180 },
    { field: "manzil", headerName: "HUDUD", width: 150 },
    { field: "til", headerName: "TIL", width: 150 },
    {
      field: "telefonRaqam",
      headerName: "TELEFON RAQAM",
      width: 180,
    },
    {
      field: "holat",
      headerName: "HOLAT",
      width: 150,
    },
  ];

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const rowList: any = [];
    console.log(users);

    users.forEach((i: any) => {
      let tempObj: any = {};
      Object.entries(i._document?.data?.value?.mapValue?.fields).forEach(
        (j: any) => {
          tempObj[j[0]] = j[1].stringValue;
        }
      );
      rowList.push(tempObj);
    });
    setRows(rowList);
  }, [users]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        style={{
          backgroundColor: "#fff",
        }}
      />
    </div>
  );
}
