import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import "shards-ui/dist/css/shards.min.css";
import {Box, Typography} from "@mui/material";
import RockPaperScissors from '../components/RockPaperScissors.js';

import {color_palette} from '../style/StylePalette.js';

function DemoPage(props) {
  return (<RockPaperScissors>
    </RockPaperScissors>);
}

export default DemoPage;
