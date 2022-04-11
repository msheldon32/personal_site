import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import {Paper, Typography, Card, Link,CardMedia, Box, Grid} from "@mui/material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import {color_palette, font_palette} from '../style/StylePalette.js';

function  PortfolioCard(props) {
    return (
        <Card variant="outlined">
            <Box sx={{ border: 2}}>
            <Grid container>
            <Grid item xs={6}>
            <CardMedia
              component="img"
              height="220"
              image={props.image_location}
            />
            </Grid>
            <Grid item xs={6}>
            <CardMedia
              component="img"
              height="220"
              image={props.second_image}
            />
            </Grid>
            </Grid>
            </Box>
          <Typography align="left" gutterBottom variant="h5" component="div"
              style={{color: color_palette["primary"],
                      fontWeight: "bold",
                      fontFamily: font_palette["subheader"]}}>
            {props.name}
          </Typography>
          <Typography align="left" style={{fontFamily: font_palette["text"]}}>
          {props.children}
          </Typography>
          <br />

            <Typography align="left"  style={{fontFamily: font_palette["text"]}} gutterBottom component="div">
            <FontAwesomeIcon icon={faLink} /><Link style={{color: color_palette["complement1"]}} href={props.link}>{props.link}</Link>
            </Typography>
    </Card>
  );
}

export default PortfolioCard;
