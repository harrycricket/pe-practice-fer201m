import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div
      className="footer-container"
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: "1000",
        height: "60px",
        padding: "auto 0",
        left: "0",
        top: "0",
      }}
    >
      Copyright &copy; 2023 by Huynh Van Phuot
    </div>
  );
}
