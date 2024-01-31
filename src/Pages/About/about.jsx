import { Typography, Box, Button } from "@mui/joy";
//import { Box} from "@mui/system";

import React from "react";
import { useDarkMode } from "../../DarkMode/darkmode";

export default function about() {
  const { darkMode } = useDarkMode();
  console.log(darkMode);
  const styles = {
    typochanger: {
      color: darkMode ? "#fff" : "#000",
    },
  };
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column",
        gap: "30px",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          gap: "30px",
          padding: "130px",
        }}
      >
        <Typography
          level="h1"
          sx={{ fontSize: "50px", fontWeight: "700", color: "#754ef9" }}
        >
          ABOUT ME
        </Typography>

        <div>
          <Typography level="h4" sx={styles.typochanger}>
            Software developer at MindCrewTech, specializing in RESTful APIs and
            server-side operations.
          </Typography>
          <Typography level="h4" sx={styles.typochanger}>
            Recently, I've delved into frontend development, showcasing my knack
            for creating dynamic and user-friendly websites.
          </Typography>
          <Typography level="h4" sx={styles.typochanger}>
            Proficient in both frontend and backend perspectives.
          </Typography>
        </div>
        <Button
          sx={{
            padding: "10px 30px ",
            backgroundColor: darkMode ? "#FFF" : "#754ef9",
            color: darkMode ? "#754ef9" : "#FFF",
            fontWeight: "500",
            gap: "60px",
            //marginRight: "1000px",
          }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
}
