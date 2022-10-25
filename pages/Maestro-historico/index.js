import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const index = () => {
  const router = useRouter();
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "firstName", headerName: "First name" },
    { field: "lastName", headerName: "Last name" },
    {
      field: "age",
      headerName: "Age",
      type: "number",
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
      width: 200,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <>
      <p>Maestro Historico</p>
      <Button
        variant="contained"
        onClick={() => router.push("/Maestro-historico/Crear")}
      >
        Crear
      </Button>
      <br />
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
        />
      </div>
    </>
  );
};

export default index;
