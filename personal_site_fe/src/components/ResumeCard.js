import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import {Paper, Typography} from "@mui/material";
import {color_palette, font_palette} from '../style/StylePalette.js';
import {MuiThemeProvider, createTheme} from '@material-ui/core/styles';

function  ResumeCard(props) {
    /*const theme = createTheme({
      typography: {
        fontFamily: ["Roboto"//font_palette["header"]
                    ]
      }
    });*/
    return (
      <Paper fixed elevation="1" variant="outlined">
        <Typography align="left" fontWeight="bold" gutterBottom
              component="div"
              style={{color: color_palette["primary"],
                      fontFamily: font_palette["header"],
                      fontSize: 30}}>
          {props.name}
       </Typography>
          {props.children}
      </Paper>
  );
}

export default ResumeCard;
