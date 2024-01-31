import { Typography } from "@mui/joy";
import { Box } from "@mui/system";
import React from "react";
import arrow from "../../assets/up-arrow.png";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#754ef9",
        padding: "20px",
        //marginRight: "5px",
      }}
    >
      <Typography sx={{ color: "#FFF" ,marginLeft:"60px"}}>
        Copyright © 2023 by Lovesh Sahu | All Rights Reserved
      </Typography>
      <a href="http://localhost:5173/">
        <img
          src={arrow}
          style={{ width: "20px", marginBottom: "5px",color:"#FFF",borderRadius:"30%",backgroundColor:"#FFF" ,padding:"10px" }}
          
        />
      </a>
    </Box>
  );
}
