import logo from '../logo.svg';
import '../App.css';

import React, {useState} from 'react';
import {Button, Box} from "@mui/material";
import {color_palette, font_palette} from '../style/StylePalette.js';


function  RockPaperScissors(props) {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [machinePlay, setMachinePlay] = useState(0);
  const [userPlay, setUserPlay] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [machineScore, setMachineScore] = useState(0);
  const [winner, setWinner] = useState(0);

  const play_assoc = ["rock", "paper", "scissors"];
  const winner_assoc = ["neither", "machine", "human"];

  React.useEffect(function updateWinner() {
      switch (machinePlay) {
        case 0:
             switch(userPlay) {
               case 0:
                setWinner(0);
                break;
              case 1:
                setWinner(2);
                break;
              case 2:
                setWinner(1);
                break;
             }
          break;
        case 1:
             switch(userPlay) {
               case 0:
                setWinner(1);
                break;
              case 1:
                setWinner(0);
                break;
              case 2:
                setWinner(2);
                break;
             }
          break;
        case 2:
             switch(userPlay) {
               case 0:
                setWinner(2);
                break;
              case 1:
                setWinner(1);
                break;
              case 2:
                setWinner(0);
                break;
             }
          break;
      }
    }, [machinePlay, userPlay]);

  function displayResults() {
    return ``;
  }

  function newUserPlay(value) {
    return function() {
      setHasPlayed(true);
      setMachinePlay(Math.floor(Math.random()*3));
      setUserPlay(value);
    }
  }

  return (
    <>
    {hasPlayed ?
    <Box  m={1}>
      User plays: {play_assoc[userPlay]}<br /><br />
      Machine plays: {play_assoc[machinePlay]}<br /><br />
      {winner_assoc[winner]} wins!
    </Box> : <Box m={1} />}
    <Box  m={1}>
      <Button onClick={newUserPlay(0)}>Rock</Button>
      <Button onClick={newUserPlay(1)}>Paper</Button>
      <Button onClick={newUserPlay(2)}>Scissors</Button>
    </Box>
    </>
  );
}

export default RockPaperScissors;
