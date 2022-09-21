import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "5000",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        backgroundColor: "#ccc7",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          zIndex: "110",
          top: "50%",
          left: "50%",
          scale: "200%",
        }}
      >
        <CircularProgress />
      </Box>
    </div>
  );
}
