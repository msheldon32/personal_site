import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import {Grid, Item, Typography, Box} from "@mui/material";
import {color_palette, font_palette} from '../style/StylePalette.js';

function  ResumeSubItem(props) {
    return (
      <>
      <Grid item xs={10}>
      <Typography align="left" fontWeight="bold" style={{fontFamily: font_palette["text"]}}>
        {props.title}
      </Typography>
      </Grid>

      <Grid item xs={2}>
      <Typography align="right"  component="div" style={{fontFamily: font_palette["text"]}}>
      <Box sx={{ fontStyle: 'italic'}}>
        {props.date}
        {props.start_date}{props.end_date? "-" : null}{props.end_date}
        </Box>
      </Typography>
      </Grid>
      <Grid item xs={12} m={1}>
      <Typography align="left" style={{fontFamily: font_palette["text"]}}>
      {props.children}
      </Typography>
      </Grid>
      </>
  );
}

export default ResumeSubItem;
