import React, { Component, useEffect, useState } from "react";
import Players from "../players/Players";
import { BASE_URL } from "../../constant";
export default function Home(props) {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    getPlayers();
  }, []);
  const getPlayers = async () => {
    const response = await fetch(BASE_URL);
    console.log(response);
    const players = await response.json();
    console.log(players);
    setPlayers(players);
  };
  return <Players players={players} />;
}
