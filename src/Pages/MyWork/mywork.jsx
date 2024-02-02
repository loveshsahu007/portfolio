import React from "react";
import Card from "../Service/cards/htmlcard.jsx";
import { Typography,Box } from "@mui/joy";
export default function mywork() {
  return (
    <Box id="mywork"
      sx={{
        width: "100%", 
        height: "auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column", // Set to column layout
        justifyContent: "center",
        alignItems: "center",
        marginTop:"5px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "50px",
          color: "#754ef9",
        }}
      >
        My Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "50px", // Add gap between cards
        }}
      >
        <Card
          title={"Healthomot"}
          description={
            "Innovative insurance provider prioritizing comprehensive health coverage for individuals and families."
          }
        />
        <Card
          title={"SellSideList"}
          description={
            "Efficient selling platform empowering companies and individuals to list and sell products seamlessly."
          }
        />
        <Card
          title={"Portfolio"}
          description={
            "Personal showcase of freelancing projects, highlighting skills and expertise in web development and design."
          }
        />
        <Card
          title={"Social Side"}
          description={
            "Dynamic platform facilitating real-time communication through video chat for social connections."
          }
        />
      </Box>
    </Box>
  );
}
