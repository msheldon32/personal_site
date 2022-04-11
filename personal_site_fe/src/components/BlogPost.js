import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import {Card, Typography, Box} from "@mui/material";
import {color_palette} from '../style/StylePalette.js';

function  BlogPost(props) {
    return (
      <Box m={1}>
      <Card>
        <Typography fontWeight="bold"  align="left" gutterBottom variant="h5" component="div" style={{color: color_palette["primary"]}}>
          {props.title}
       </Typography>
      <Typography align="left"  gutterBottom variant="h8" component="div" italic style={{color: color_palette["complement1"]}}>
        {props.date}
      </Typography>
       <Typography align="justify" >
          {props.children}
       </Typography>
      </Card>
      </Box>
  );
}

export default BlogPost;
