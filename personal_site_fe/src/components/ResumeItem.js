import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import {Card, Typography, Grid, Box} from "@mui/material";
import {color_palette, font_palette} from '../style/StylePalette.js';

function  ResumeItem(props) {
    return (
      <Box  m={1}>
      <Card variant="outlined">
        <Typography align="left" gutterBottom fontWeight="bold"
              component="div" style={{color: color_palette["primary"],
                                      fontFamily: font_palette["header"],
                                      fontSize: 24}}>
        {props.title}
        </Typography>
        <Box  m={1}>
        <Grid container>
        {props.children}
        </Grid>
        </Box>
      </Card>
      </Box>
  );
}

export default ResumeItem;
