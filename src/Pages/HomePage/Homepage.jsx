import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/joy";
import Typewriter from "typewriter-effect";
import "../../index.css";
import "../HomePage/HomePage.css";
import AboutMe from "../About/about.jsx";
import MyService from "../Service/myservice.jsx";
import ContactMe from "../ContactMe/contactMe.jsx";
import Photo from "../../assets/photo.png";
import Insta from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import GitHub from "../../assets/github.png";
import Bg from "../../assets/blob.svg";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer.jsx";
import { useDarkMode } from "../../DarkMode/darkmode";
import { color } from "@mui/system";

export default function Homepage() {
  const { darkMode } = useDarkMode();
  const styles = {
    typochanger: {
      color: darkMode ? "#fff" : "#000",
    },
    typosize: {
      fontSize: "60px",
    },
  };

  return (
    <Box id="homepage"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: darkMode ? "#000" : "#FFF",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <Header />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "55%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // padding:"10px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
              marginLeft: "250px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <Typography sx={styles.typochanger} level="h1">
                Hello,
              </Typography>
              <Typography sx={styles.typochanger} level="h1">
                I am <span style={{ color: "#754ef9" }}>L</span>OVESH{" "}
                <span style={{ color: "#754ef9" }}>S</span>AHU
              </Typography>
              <div
                style={{
                  fontSize: "50px",
                  fontWeight: "600",
                  color: "#754ef9",
                }}
              >
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("A SOFTWARE DEVELOPER.")
                      .pauseFor(500)
                      .deleteAll()
                      .typeString("A FRONT DEVELOPER.")
                      .pauseFor(500)
                      .deleteAll()
                      .typeString("A BACKEND DEVELOPER.")
                      .pauseFor(500)
                      .start();
                  }}
                />
              </div>
            </Box>
            <Box sx={{ flexDirection: "row", display: "flex", gap: "25px" }}>
              <a href="https://www.instagram.com/_.lifeoflovesh._/" target="_blank">
                {" "}
                <img src={Insta} style={{ width: "30px" }} />
              </a>
              <a href="https://www.linkedin.com/in/lovesh-sahu-09a17522a/?originalSubdomain=in"  target="_blank">
                {" "}
                <img src={LinkedIn} style={{ width: "30px" }} />
              </a>
              <a href="#">
                {" "}
                <img src={GitHub} style={{ width: "30px" }} />
              </a>
            </Box>
            <Button onClick={()=>{
              alert("No CV available!");
            }}
              sx={{
                padding: "10px 30px ",
                backgroundColor: darkMode ? "#FFF" : "#754ef9",
                color: darkMode ? "#754ef9" : "#FFF",
                fontWeight: "800",
              }}
            >
              Download CV
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "45%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            position: "relative",
            bottom: "0px",
          }}
        >
          <img
            src={Photo}
            style={{
              width: "400px",
              height: "600px",
              position: "absolute",
              zIndex: "100",
            }}
          />
          <img
            src={"https://anuragkadam.github.io/OIBSIP/portfolio/blob.svg"}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          />
        </Box>
      </Box>
      <AboutMe />
      <MyService />
      <ContactMe />
      <Footer />
    </Box>
  );
}
