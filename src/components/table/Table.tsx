import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// Interface
import { IAboutUser } from "../userAbout/UserAboutPage";

export default function DataTable({
  users,
  setUsersId,
  setCurrentUser,
  token,
}: any) {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "img",
      headerName: "RASM",
      width: 110,
      renderCell: (params: any) => {
        return (
          <div>
            <img
              src={params.row.img}
              alt="img"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                marginTop: "6px",
              }}
            />
          </div>
        );
      },
    },
    { field: "ism", headerName: "ISM FAMILIYA", width: 180 },
    { field: "manzil", headerName: "HUDUD", width: 150 },
    { field: "fani", headerName: "TIL", width: 150 },
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

  function changeCurrentUser(e: IAboutUser) {
    users.map((i: any) => {
      if (i._document?.data?.value?.mapValue?.fields.id.stringValue === e.id) {
        setCurrentUser(i._document?.data?.value?.mapValue?.fields);
        setCurrentUser((p: any) => ({
          ...p,
          uid: i._document?.key?.path?.segments[6],
        }));
      }
    });
  }

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
        onRowDoubleClick={(e: any) => {
          if (token !== "guest") changeCurrentUser(e);
        }}
        style={{
          backgroundColor: "#fff",
        }}
      />
    </div>
  );
}
