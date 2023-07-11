import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ContactUs from "./container/contact-us/ContactUs";
import Footer from "./container/footer/Footer";
import Home from "./container/main/Home";
import Navigation from "./container/navigation/Navigation";
import Detail from "./container/player-detail/Detail";
import Dashboard from "./container/dashboard/Dashboard";

function App() {
  return (
    <>
      <Navigation />
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
