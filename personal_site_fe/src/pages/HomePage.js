import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import {Card, Typography, Link} from "@mui/material";
import {color_palette, font_palette} from '../style/StylePalette.js';

function  HomePage  (props){
  return (<>
    <br />
    <Card>
    <Typography gutterBottom variant="h5" style={{fontFamily: font_palette["header"], fontWeight: "bold"}} component="div">Welcome!</Typography>
    <Typography gutterBottom component="div" style={{fontFamily: font_palette["subheader"]}} >I am a PhD student in Computer Science at Imperial College London.</Typography>
    <Typography gutterBottom component="div" style={{fontFamily: font_palette["subheader"]}} >My interests include mobility systems, pricing, queueing networks, and reinforcement learning.</Typography>
    <Typography gutterBottom component="div" style={{fontFamily: font_palette["subheader"]}} >As a <Link style={{color: color_palette["complement1"]}} href="https://www.imperial.ac.uk/computing/prospective-students/phd/scholarships/#Doctoral">Teaching Scholar</Link>, I have extensive instruction and experience related to Computer Science education.</Typography>
    </Card>
    </>);
}

export default HomePage;
