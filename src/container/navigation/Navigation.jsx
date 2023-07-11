import {
  ContactPage,
  DarkMode,
  Feed,
  Info,
  LightMode,
} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Navigation() {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <>
      <Grid2
        className="navBar"
        container
        sx={{
          position: "fixed",
          width: "100%",
          zIndex: "1000",
          height: "60px",
          padding: "auto 0",
          left: "0",
          top: "0",
          backgroundColor: "#99dbf5",
        }}
      >
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              onClick={() => navigate("/")}
              label={
                <Box sx={{ display: "flex", marginRight: "10px" }}>
                  <HomeIcon /> <Typography>Home</Typography>
                </Box>
              }
              value={1}
            />
            <Tab
              onClick={() => navigate("/dashboard")}
              label={
                <Box sx={{ display: "flex", marginRight: "10px" }}>
                  <Info /> <Typography> Dashboard</Typography>
                </Box>
              }
              value={2}
            />

            <Tab
              onClick={() => navigate("/contact")}
              label={
                <Box sx={{ display: "flex", marginRight: "10px" }}>
                  <ContactPage /> <Typography>Contact</Typography>
                </Box>
              }
              value={3}
            />
          </Tabs>
        </Grid2>
      </Grid2>
    </>
  );
}
