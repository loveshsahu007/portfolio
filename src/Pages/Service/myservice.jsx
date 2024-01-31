import { Box, Typography } from "@mui/joy";
import React from "react";
import Cards from "../Service/cards/servicecards";
import WWW from "../../assets/world-wide-web.png";
export default function myservice() {
  return (
    <Box id="myservice"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <Typography
        level="h1"
        sx={{
          fontSize: "50px",
          color: "#754ef9",
        }}
      >
        My Service
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Cards
          imageSrc={WWW}
          title="Web Development"
          description="LOVESH SAHU, a skilled senior developer, excels in delivering timely and top-notch projects. His proficiency in both frontend and backend development makes him a valuable asset for efficient and high-quality solutions.A"
        />
        <Cards
          imageSrc={WWW}
          title="Integrate third-Party"
          description="I have seamlessly integrated several third-party services into my system, including Nodemailer for email functionality, Google Apps Script for automation, LinkedIn API for social connectivity, Twitter API for real-time updates, WebRTC for real-time communication, and Stripe for secure payment processing."
        />
        <Cards
          imageSrc={WWW}
          title="Backend Developer"
          description="Create RESTfull APIS and handle server as wellExpertise in developing RESTful APIs and managing server operations. Proficient in creating seamless and efficient communication interfaces, ensuring robust functionality and smooth server handling."
        />
      </Box>
    </Box>
  );
}
