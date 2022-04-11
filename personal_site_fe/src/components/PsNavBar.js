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
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            style={{color: color_palette["primary"],
                                    fontWeight: "bold",
                                    fontSize: 28,
                                    fontFamily: font_palette["header"]}}>
                                    Sheldon
                          </Typography>
              <ListItem component={NavLink} active={this.props.page=="home"} style={({ isActive }) => ({
                      color: isActive ? color_palette["primary"] : color_palette["complement1"],
                        fontFamily: font_palette["subheader"]
                    })} to="/">
                Home
              </ListItem>
              <ListItem component={NavLink} active={this.props.page=="resume"} style={({ isActive }) => ({
                      color: isActive ? color_palette["primary"] : color_palette["complement1"],
                        fontFamily: font_palette["subheader"]
                    })} to="/resume">
                Resume
              </ListItem>
              <ListItem component={NavLink} active={this.props.page=="portfolio"} style={({ isActive }) => ({
                      color: isActive ? color_palette["primary"] : color_palette["complement1"],
                        fontFamily: font_palette["subheader"]
                    })} to="/portfolio">
                Portfolio
              </ListItem>
              <ListItem component={NavLink} active={this.props.page=="contact"} style={({ isActive }) => ({
                      color: isActive ? color_palette["primary"] : color_palette["complement1"],
                        fontFamily: font_palette["subheader"]
                    })} to="/contact">
                Contact
              </ListItem>
            {/*<InputGroup size="sm" seamless>
              <FormInput className="border-0" placeholder="Search..." />
            </InputGroup>*/}
          </Toolbar>
      </AppBar>);
  }
}

export default PsNavBar;
