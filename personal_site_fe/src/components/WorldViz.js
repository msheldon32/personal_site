import logo from '../logo.svg';
import '../App.css';

//import WorldMap from './World Map.svg'

import React, {useState, useReducer} from 'react';
import {Button, Box, Typography,Zoom} from "@mui/material";
import {color_palette, font_palette} from '../style/StylePalette.js';

import SvgWorldMap from '../components/SvgWorldMap.js';

//import { transform } from '@svgr/core';

/*
 * Note: SVGR can be used to transform the .svg file, but it ended up blowing up the size, so I did the embedding myself.
 */

function  WorldViz(props) {

  const inMap = SvgWorldMap({"width": 1000, "height": 500});
  var svgChildren = [];
  //console.log(svgMap.props.children);

  const [stateColors, setStateColors] = useState({});

  var countryNames = React.Children.map(inMap.props.children, function(a) {
    if (a.type === "path" || a.type==="g") {
      return {
        "id": a.props.id,
        "title": a.props
      };
    } else {
      return a;
    }
  });

  console.log(countryNames);


  svgChildren = React.Children.map(inMap.props.children, function(a) {
    if (a.type === "path" || a.type==="g") {
      //console.log(a.props.id);
      return React.cloneElement(a, {"onClick": function() {
              console.log(a.props.id);
            }});
    } else {
      return a;
    }
  });



  return (
    <>
      <Box sx={{width: 1000, height:507, border: 1}}>
       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={props.width} height={props.height} viewBox="0 0 2754 1398" children={svgChildren} />
      </Box>

      <Typography>World map sourced from: https://upload.wikimedia.org/wikipedia/commons/4/4d/BlankMap-World.svg.
      </Typography>
    </>
  )
}

export default WorldViz;
