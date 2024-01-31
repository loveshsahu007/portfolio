import { Box } from "@mui/system";
import React from "react";

import Button from "@mui/joy/Button";
import Textarea from '@mui/joy/Textarea'
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import { Typography } from "@mui/joy";

export default function ContactMe() {

  return (
    <Box id="contactme"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        minHeight: "auto",
        //boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        
      }}
    >
      <Typography
        sx={{
          fontSize: "50px",
          fontWeight: "700",
          marginTop: "10px",
          color: "#754ef9",
        }}
      >
        Contact Me!
      </Typography>
      <Box sx={{ width: "50%",  }}>
        <Stack spacing={2} direction="row">
          <Box sx={{ width: "50%" }}>
            <Stack spacing={2}>
              <Input placeholder="Full Name" />
              <Input placeholder="Email Address" />
            </Stack>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Stack spacing={2}>
              <Input placeholder="Mobile Number" />
              <Input placeholder="Email Subject" />
            </Stack>
          </Box>
        </Stack>
        <Textarea minRows={7} sx={{margin:"20px 0px"}} placeholder="Your Message..."/>
        <Button
          type="submit"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
            width: "100%",
            height: "50px",
            fontSize: "20px",
            fontWeight: "700",
            color: "#fff",
            marginBottom:"60px",
            backgroundColor:"#754ef9"
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
