import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constant";
import "./detail.css";

export default function Detail() {
  const [open, setOpen] = useState();
  const [player, setPlayer] = useState();
  const userName = useParams();

  useEffect(() => {
    getPlayer();
  }, []);
  const getPlayer = async () => {
    try {
      const response = await fetch(BASE_URL + "/" + userName.id);
      const player = await response.json();
      console.log(player);
      setPlayer(player);
      console.log(player.avatar);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container">
      {player && (
        <Box
          sx={{
            width: "30%",
            position: "relative",
            marginTop: "5rem",
          }}
        >
          <Box>
            <img
              src={player.avatar}
              alt=""
              style={{ width: "500px", height: "500px" }}
            />
          </Box>
          <Box
            sx={{
              paddingTop: 3,
              position: "relative",
            }}
          >
            <Typography variant="h4" color="text.brands">
              Name: {player.name}
            </Typography>

            <Box>
              <Typography variant="h6" color="text.p">
                Address: {player.address}
              </Typography>
              <Typography variant="h6" color="text.p">
                Age: {player.age}
              </Typography>
              <Typography variant="h6" color="text.p">
                Created Date: {player.createdAt}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
}
