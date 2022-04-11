import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import "shards-ui/dist/css/shards.min.css";
import {Box, Typography} from "@mui/material";

import {color_palette} from '../style/StylePalette.js';

function DevPage(props) {
  return (<>
      <Typography>Chosen Color Palette:</Typography>
      <Box sx={{"bgcolor": color_palette["orange"]}}>
       ORANGE COLOR<br/>
        ORANGE COLOR<br/>
         ORANGE COLOR<br/>
          ORANGE COLOR<br/>
           ORANGE COLOR<br/>
            ORANGE COLOR
      </Box>
      <Box sx={{"bgcolor": color_palette["blue"]}}>
        BLUE COLOR<br/>
          BLUE COLOR<br/>
            BLUE COLOR<br/>
              BLUE COLOR<br/>
                BLUE COLOR<br/>
                  BLUE COLOR
      </Box>
      <Box sx={{"bgcolor": color_palette["purple"]}}>
       PURPLE COLOR<br/>
        PURPLE COLOR<br/>
         PURPLE COLOR<br/>
          PURPLE COLOR<br/>
           PURPLE COLOR<br/>
            PURPLE COLOR
      </Box>
      <Box sx={{"bgcolor": color_palette["green"]}}>
       GREEN COLOR<br/>
        GREEN COLOR<br/>
         GREEN COLOR<br/>
          GREEN COLOR<br/>
           GREEN COLOR<br/>
            GREEN COLOR
      </Box>
    </>);
}

export default DevPage;
