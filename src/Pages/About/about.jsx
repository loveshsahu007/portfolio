import { Typography, Box, Button } from "@mui/joy";
//import { Box} from "@mui/system";
import "../About/about.css";

import { React, useState } from "react";
import { useDarkMode } from "../../DarkMode/darkmode";
import { width } from "@mui/system";

export default function about() {
  const { darkMode } = useDarkMode();

  const styles = {
    typochanger: {
      color: darkMode ? "#fff" : "#000",
    },
  };
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent);
  };
  return (
    <Box
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
        id="about"
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
          <Typography
            level="body-sm"
            sx={{ fontSize: "20px", color: "grey", ...styles.typochanger }}
          >
            {showFullContent
              ? "Versatile software developer with expertise in backend development, specializing in RESTful APIs and server-side operations. Recently ventured into frontend development, demonstrating proficiency in crafting dynamic and user-friendly websites. Skilled in seamlessly integrating third-party services such as Nodemailer, Google Apps Script, LinkedIn API, Twitter API, WebRTC, and Stripe for enhanced system functionality. Passionate about staying abreast of the latest technologies and best practices, I am dedicated to delivering innovative and scalable solutions that meet the evolving needs of users and businesses."
              : "Versatile software developer with expertise in backend development, specializing in RESTful APIs and server-side operations. Recently ventured into frontend development, demonstrating proficiency in crafting dynamic and user-friendly websites. Skilled in seamlessly integrating third-party services such as Nodemailer, Google Apps Script, LinkedIn API, Twitter API, WebRTC, and Stripe for enhanced system functionality."}
          </Typography>
        </div>
        {/* 
        <Button
          onClick={handleReadMoreClick}
          sx={{
            padding: "10px 30px ",
            backgroundColor: darkMode ? "#FFF" : "#754ef9",
            color: darkMode ? "#754ef9" : "#FFF",
            fontWeight: "500",
            gap: "60px",
          }}
        >
          Read More
        </Button> */}
        <button
          style={{ width: "15%", padding: "10px" }}
          onClick={handleReadMoreClick}
        >
          Read More
        </button>
      </Box>
    </Box>
  );
}
