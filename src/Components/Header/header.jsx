// Header.js
import React from "react";
import { Box, Typography, Switch, Tooltip } from "@mui/joy";
import { useDarkMode } from "../../DarkMode/darkmode";
import "./header.css";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const handleScrollToAbout = () => {
    const scrollToAbout = document.getElementById("about");
    scrollToAbout.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToMyService = () => {
    const scrollToAbout = document.getElementById("myservice");
    scrollToAbout.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContactMe = () => {
    const scrollToAbout = document.getElementById("contactme");
    scrollToAbout.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToHome = () => {
    const scrollToAbout = document.getElementById("homepage");
    scrollToAbout.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToMyWork = () => {
    const scrollToAbout = document.getElementById("mywork");
    scrollToAbout.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "0px",
        zIndex: "10000",
        cursor: "pointer",
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#754ef9",
        padding: "15px 15px 15px 15px",
      }}
    >
      <Typography
        sx={{ color: "white", fontWeight: "500", marginLeft: "80px" }}
        level="h2"
      >
        PORTFOLIO
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "100px",
        }}
      >
        <a className="navlinks" onClick={handleScrollToHome}>
          HOME{" "}
        </a>
        <a className="navlinks" onClick={handleScrollToAbout}>
          ABOUT
        </a>
        <a className="navlinks" onClick={handleScrollToMyService}>
          SERVICE
        </a>
        <a className="navlinks" onClick={handleScrollToMyWork}>
          MY-WORK
        </a>
        <a className="navlinks" onClick={handleScrollToContactMe}>
          CONTACT
        </a>
        {/* <Tooltip
          sx={{ zIndex: "10000", position: "relative" }}
          title="Switch to dark mode"
        >
          <Switch onChange={toggleDarkMode} />
        </Tooltip> */}
        <Tooltip
          sx={{ zIndex: "10000", position: "relative" }}
          title="Switch to dark mode"
        >
          <Box onChange={toggleDarkMode}>
            <label class="ui-switch">
              <input type="checkbox" />
              <div class="slider">
                <div class="circle"></div>
              </div>
            </label>
          </Box>
        </Tooltip>
      </div>
    </Box>
  );
}
