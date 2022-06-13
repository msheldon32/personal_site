import logo from '../logo.svg';
import '../App.css';

import React, {useState, useReducer} from 'react';
import {Button, Box} from "@mui/material";
import {color_palette, font_palette} from '../style/StylePalette.js';

/*
 * update for synchronous behavior of machine/user/score
 */

function  RockPaperScissors(props) {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [machineScore, setMachineScore] = useState(0);
  const [winner, setWinner] = useState(0);
  const [playCycle, setPlayCycle] = useState();

  const [playState, dispatchPlayState] = useReducer(function(oldState, action) {
     var state = [...oldState];
     setWinner(getWinner(action["machine_play"], action["human_play"]));
     if (winner != 0) {
       state[winner-1] += 1;
     }
     state[2] = action["machine_play"];
     state[3] = action["human_play"];
     return state;
  }, [0,0,0,0]);

  const play_assoc = ["rock", "paper", "scissors"];
  const player_assoc = ["neither", "machine", "human"];

  function getWinner(machinePlay, userPlay) {
      switch (machinePlay) {
        case 0:
             switch(userPlay) {
               case 0:
                return 0;
                break;
              case 1:
                return 2;
                break;
              case 2:
                return 1;
                break;
             }
          break;
        case 1:
             switch(userPlay) {
               case 0:
                return 1;
                break;
              case 1:
                return 0;
                break;
              case 2:
                return 2;
                break;
             }
          break;
        case 2:
             switch(userPlay) {
               case 0:
                return 2;
                break;
              case 1:
                return 1;
                break;
              case 2:
                return 0;
                break;
             }
          break;
      }
    }

  function displayResults() {
    return ``;
  }

  function newUserPlay(value) {
    return function() {
      setHasPlayed(true);
      dispatchPlayState({
        "machine_play": Math.floor(Math.random()*3),
        "human_play": value
      });
    }
  }

  return (
    <>
    {hasPlayed ?
    <Box  m={1}>
      User plays: {play_assoc[playState[3]]}<br /><br />
      Machine plays: {play_assoc[playState[2]]}<br /><br />
      {player_assoc[winner]} wins!
    </Box> : <Box m={1} />}
    {hasPlayed ?
    <Box  m={1}>
      User score: {playState[1]}<br /><br />
      Machine score: {playState[0]}<br /><br />
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
