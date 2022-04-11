import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import "shards-ui/dist/css/shards.min.css";
import {List, ListItemText, ListItem, Typography, Link} from "@mui/material";
import {color_palette, font_palette} from '../style/StylePalette.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function ContactPage(props) {
  return (<>

    <List>
    <ListItem disablePadding>
     <ListItemText>
     <Typography style={{fontFamily: font_palette["text"]}}>
     Email: <Link style={{color: color_palette["complement1"]}} href="mattsheldon914@gmail.com">mattsheldon914@gmail.com</Link>
     </Typography>
     </ListItemText>
    </ListItem>
    <ListItem disablePadding>
     <ListItemText>
     <Typography style={{fontFamily: font_palette["text"]}}>
       LinkedIn: <Link style={{color: color_palette["complement1"]}} href="https://uk.linkedin.com/in/matthew-sheldon-2a52a5196">https://uk.linkedin.com/in/matthew-sheldon-2a52a5196</Link>
       </Typography>
     </ListItemText>
    </ListItem>
    <ListItem disablePadding>
     <ListItemText>
     <Typography style={{fontFamily: font_palette["text"]}}>
       Github: <Link style={{color: color_palette["complement1"]}} href="https://github.com/msheldon32">https://github.com/msheldon32</Link>
       </Typography>
     </ListItemText>
    </ListItem>
    <ListItem disablePadding>
     <ListItemText>
     <Typography style={{fontFamily: font_palette["text"]}}>
      Phone Number (USA): +1 (701) 367-7609
      </Typography>
     </ListItemText>
    </ListItem>
    <ListItem disablePadding>
     <ListItemText>
     <Typography style={{fontFamily: font_palette["text"]}}>
        Phone Number (UK): +44 7377 843347
        </Typography>
     </ListItemText>
    </ListItem>
    </List>
    </>);
}

export default ContactPage;
