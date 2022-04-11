import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import {Paper, Typography, Link} from "@mui/material";
import PortfolioCard from '../components/PortfolioCard.js';
import {color_palette, font_palette} from '../style/StylePalette.js';

function  PortfolioPage (props) {
    return (<>
        <Paper>
          <PortfolioCard name="JLINE" link="https://github.com/imperial-qore/line-solver-java/" second_image="/static/images/jline.png" image_location="/static/images/jline_out.png">
            Developed in collaboration with Giuliano Casale and the QORE team, JLINE is a port of the popular LINE simulation and modeling environment to the Java programming language.

            SolverSSA, a Markovian discrete-event simulator, along with the inital platform release, were developed as part of my MSc dissertation at Imperial College.
          </PortfolioCard>
            <PortfolioCard name="AgentLib" link="">
              AgentLib is a Java-based toolkit for defining and training reinforcement learning models. AgentLib focuses on rapid development, ease of use, and clean integration with other software.
            </PortfolioCard>
        </Paper>

          <Typography style={{fontFamily: font_palette["text"]}}>
            You can view my github portfolio at: <Link style={{color: color_palette["complement1"]}} href="https://github.com/msheldon32">https://github.com/msheldon32</Link>.
          </Typography>
        </>
      );
}

export default PortfolioPage;
