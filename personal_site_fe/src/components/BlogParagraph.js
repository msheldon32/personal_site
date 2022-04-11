import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import {Card, Typography, Box} from "@mui/material";
import {color_palette} from '../style/StylePalette.js';

function  BlogParagraph(props) {
    return (
      <>
          {props.children}
       <br /><br />
      </>
  );
}

export default BlogParagraph;
