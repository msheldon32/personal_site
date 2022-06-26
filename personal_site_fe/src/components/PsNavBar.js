import logo from '../logo.svg';
import '../App.css';

import React from 'react';

import {color_palette, font_palette} from '../style/StylePalette.js';
import {AppBar, Toolbar, ListItem, Typography} from '@mui/material';

import {Route, NavLink} from "react-router-dom";

class  PsNavBar extends React.Component {
  render() {
    const NavBarStyle = {
      "background-color": "white",
      "fontFamily": font_palette["primary"]
    };

    const activeStyle = {
      color: color_palette["primary"],
      fontFamily: font_palette["subheader"],
      fontSize: 16
    }

    const inactiveStyle = {
      color: color_palette["complement1"],
      fontFamily: font_palette["subheader"],
      fontSize: 16
    }

    return (
      <AppBar style={NavBarStyle} position="sticky">
          <Toolbar>
              <Typography
                    variant="h5"
                    component="div"
                    sx={{ mr: 1, display: { xs: 'none', md: 'flex' } }}
                    style={{color: color_palette["primary"],
                            fontWeight: "bold",
                            fontSize: 28,
                            fontFamily: font_palette["header"]}}>
                            Matthew
                  </Typography>
                      <Typography
                            variant="h5"
                            component="div"
                            sx={{ mr: 10, display: { xs: 'none', md: 'flex' } }}
                            style={{color: color_palette["primary"],
                                    fontWeight: "bold",
                                    fontSize: 28,
                                    fontFamily: font_palette["header"]}}>
                                    Sheldon
                          </Typography>
              <ListItem component={NavLink} active={this.props.page=="home"} style={({isActive}) => (isActive ? activeStyle : inactiveStyle)} to="/">
                Home
              </ListItem>
              <ListItem component={NavLink} active={this.props.page=="resume"} style={({isActive}) => (isActive ? activeStyle : inactiveStyle)} to="/resume">
                Experience
              </ListItem>
              <ListItem component={NavLink} active={this.props.page=="portfolio"} style={({isActive}) => (isActive ? activeStyle : inactiveStyle)} to="/portfolio">
                Portfolio
              </ListItem>
              <ListItem component={NavLink} active={this.props.page=="contact"} style={({isActive}) => (isActive ? activeStyle : inactiveStyle)} to="/contact">
                Contact
              </ListItem>
          </Toolbar>
      </AppBar>);
  }
}

export default PsNavBar;
