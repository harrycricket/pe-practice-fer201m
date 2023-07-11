import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useNavigate } from "react-router-dom";
import s from "./staffCard.module.scss";

export default function PlayerCard({ player }) {
  const navigate = useNavigate();
  const cssButton = {
    fontSize: "1.6rem",
    textAlign: "center",
    padding: "0.5rem 1.5rem",
    border: "1px solid rgba(0, 0, 0, 0.5)",
  };
  return (
    <Box sx={s.container}>
      <Box sx={s.avatar}>
        <img src={player.avatar} alt="" style={{ width: "100%" }} />
      </Box>
      <Box sx={s.content}>
        <Box>
          <Typography
            sx={s.name}
            style={{ fontSize: "2.4rem", fontWeight: "700" }}
            variant="h3"
            color={"text.brands"}
          >
            {player.name}
          </Typography>
          <Typography
            sx={s.age}
            style={{ fontSize: "1.6rem" }}
            variant="h4"
            color={"text.secondary"}
          >
            Age: {player.age}
          </Typography>
          <Typography
            sx={s.address}
            style={{ fontSize: "1.6rem" }}
            variant="h4"
            color={"text.secondary"}
          >
            Address: {player.address}
          </Typography>
          <Typography
            sx={s.createdAt}
            style={{ fontSize: "1.6rem" }}
            variant="h4"
            color={"text.secondary"}
          >
            Created Date: {player.createdAt}
          </Typography>
        </Box>
        <IconButton
          sx={{ padding: "0", marginTop: "1rem" }}
          onClick={() => navigate("detail/" + player.id)}
        >
          <Button sx={cssButton}>Detail</Button>
        </IconButton>
      </Box>
    </Box>
  );
}
