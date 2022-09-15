import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// Interface
import { IUsers } from "../../interfaces/Interface";

export default function DataTable({ users, setUsersId }: any) {
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
        onSelectionModelChange={(e: any) => setUsersId(e)}
        style={{
          backgroundColor: "#fff",
        }}
      />
    </div>
  );
}
