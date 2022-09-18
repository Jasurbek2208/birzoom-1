import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// Interface
import { IAboutUser } from "../userAbout/UserAboutPage";
import styled from "styled-components";

export default function DataTable({
  users,
  setUsersId,
  setCurrentUser,
  token,
  loading,
  id,
}: any) {
  const columns: any = [
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
      field: "holati",
      headerName: "HOLAT",
      width: 150,
      renderCell: (params: any) => {
        return params.row.holati === "Faol" ? (
          <div
            style={{
              background: "rgba(0, 188, 150, 0.1)",
              borderRadius: "24px",
              padding: "2px 16px",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "24px",
              color: "#00BC96",
            }}
          >
            {params.row.holati}
          </div>
        ) : (
          <div
            style={{
              background: "rgba(235, 87, 87, 0.1)",
              borderRadius: "24px",
              padding: "2px 16px",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "24px",
              color: "#EB5757",
            }}
          >
            {params.row.holati}
          </div>
        );
      },
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
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          loading={loading}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={(e: any) => setUsersId(e)}
          onRowClick={(e: any) => {
            if (token !== "guest") changeCurrentUser(e);
          }}
          style={{
            backgroundColor: "#fff",
          }}
        />
      </div>

      <StyledTable id="usersTable" style={{ height: 400, width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>ISM</th>
            <th>FAMILIYA</th>
            <th>HUDUD</th>
            <th>TIL</th>
            <th>FAOLIYAT TURI</th>
            <th>TIL DARAJASI</th>
            <th>TELEFON RAQAM</th>
            <th>HOLAT</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((i: any) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.ism}</td>
                <td>{i.familiya}</td>
                <td>{i.manzil}</td>
                <td>{i.fani}</td>
                <td>{i.faoliyatTuri}</td>
                <td>{i.tilDarajasi}</td>
                <td>{i.telefonRaqam}</td>
                <td>{i.holati}</td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </>
  );
}

const StyledTable = styled.table`
  background-color: #fff;
  display: none;
  
  thead {
    tr {
      th {
        width: 180px;
        text-align: left;

        &:first-of-type {
          max-width: 100px !important;
          overflow: hidden;
        }
      }
    }
  }

  tbody {
    tr {
      td {
        min-width: 180px;
        text-align: left;

        &:first-of-type {
          min-width: 90px;
          max-width: 92px !important;
          overflow: hidden;
        }
      }
    }
  }
`;
