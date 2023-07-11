import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import React from "react";
import PlayerCard from "../../components/player-card/PlayerCard.jsx";
import "./players.css";

export default function Players({ players }) {
  return (
    <>
      <Grid2 container spacing={8} margin={5}>
        {players &&
          players.map((player) => (
            <Grid2 xl={4} lg={4} md={6} sm={12} xs={12}>
              <PlayerCard player={player} key={player.id} />
            </Grid2>
          ))}
      </Grid2>
    </>
  );
}
