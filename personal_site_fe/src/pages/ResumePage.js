import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import {Paper, List, ListItemText, ListItem, Typography, Box} from "@mui/material";
import ResumeCard from '../components/ResumeCard.js';
import ResumeItem from '../components/ResumeItem.js';
import ResumeSubItem from '../components/ResumeSubItem.js';

function ResumePage (props) {
    return (
        <Paper>
          <ResumeCard name="Education">
            <ResumeItem title="Imperial College London">
              <ResumeSubItem title="PhD Computer Science" start_date={"Dec 2021"} end_date={"present"}>
                  Under Dr. Giuliano Casale, I study mobility systems in the context of queueing theory and reinforcement learning.<br />
                  At the moment, my research focuses on pricing and matching within bikesharing systems.
              </ResumeSubItem>
                <ResumeSubItem title="Research Assistant" start_date={"Oct 2021"} end_date={"Nov 2021"}>
                  Development work for Project INTRA.
                </ResumeSubItem>
              <ResumeSubItem title="MSc Computer Science" start_date={"Oct 2020"} end_date={"Oct 2021"} classification={"Distinction"}>
                   Graduated with Distinction <br />
                   Thesis: The Development of JLINE and the Application of the Gillespie Algorithm to Queueing Networks.
              </ResumeSubItem>
            </ResumeItem>
            <ResumeItem title="Georgia Institute of Technology">
              <ResumeSubItem title="BS Industrial & Systems Engineering" start_date={"Aug 2014"} end_date={"May 2019"} classification={"Highest Honors"}>
                 Graduated with Highest Honors <br />
                 Capstone Project: GWCC Equipment Allocation. <br />
                 Study Abroad Experiences in China and France.
              </ResumeSubItem>
              </ResumeItem>
          </ResumeCard>
          <ResumeCard name="Experience">
            <ResumeItem title="Raytheon">
            <ResumeSubItem title="Software Engineer I" start_date={"Mar 2020"} end_date={"Aug 2020"}>
                  Developed scripts for automating build processes and configuration management for the GPS-OCX project.<br />
                  Assisted with streamlining and formalization for DevOps-related business processes.
            </ResumeSubItem>
            </ResumeItem>
            <ResumeItem title="Balbec Capital">
            <ResumeSubItem title="Quantitative Financial Analyst" start_date={"Jan 2019"} end_date={"Feb 2020"}>
                  Developed software for financial analysis and reporting on NPL investments worth over $1 billion. <br />
                  Assisted with analysis for monthly reporting cycles and new investments.
            </ResumeSubItem>
            </ResumeItem>
            <ResumeItem title="Buckle LLC">
            <ResumeSubItem title="Data Analytics Intern" start_date={"Aug 2018"} end_date={"Dec 2018"}>
                  Developed analytics scripts, and an internal website for analyzing the rideshare market.
            </ResumeSubItem>
            </ResumeItem>
            <ResumeItem title="Equifax">
            <ResumeSubItem title="Operations Intern" start_date={"May 2018"} end_date={"Dec 2018"}>
                  Developed analytics dashboards for both internal and external stakeholders.
            </ResumeSubItem>
            </ResumeItem>
          </ResumeCard>
          <ResumeCard name="Teaching">
            <ResumeItem title="TA Positions">
            <ResumeSubItem title="Introduction to Machine Learning" date={"Spring 2022"}>
              Led the marking process for ML-related development coursework.
            </ResumeSubItem>
            <ResumeSubItem title="DevOps Laboratory" date={"Spring 2022"}>
              Instructed in labs involving containerization and deployment of web applications.
            </ResumeSubItem>
            <ResumeSubItem title="Linear Algebra" date={"Spring 2022"}>
              Led students in bi-weekly tutorial sessions covering topics in Linear Algebra.
            </ResumeSubItem>
            </ResumeItem>
          </ResumeCard>
          <ResumeCard name="Courses and Skills">
            <ResumeItem title="Computer Science">
              <ResumeSubItem title="Languages">
              Python, C++, JavaScript, Java, Rust, SQL
              </ResumeSubItem>
              <ResumeSubItem title="Frameworks">
              React.js, Django, Node.js, Numpy, Pandas, PyTorch
              </ResumeSubItem>
              <ResumeSubItem title="Software">
              Git, Linux
              </ResumeSubItem>
              <ResumeSubItem title="Topics">
              Machine Learning, Reinforcement Learning, Data Analysis, Cryptography Engineering, Computer Graphics, DevOps
              </ResumeSubItem>
            </ResumeItem>
            <ResumeItem title="Mathematics">
              <ResumeSubItem title="Probability & Statistics">
              Regression Analysis, Hypothesis Testing, Design of Experiments
              </ResumeSubItem>
              <ResumeSubItem title="Operations Research">
              Mathematical Programming, Queueing Theory, Markov Processes, Discrete-Event Simulation, Agent-Based Simulation
              </ResumeSubItem>
            </ResumeItem>
            <ResumeItem title="Other Skills">
              <ResumeSubItem title="Languages">
              French (Intermediate), Spanish (Intermediate), Russian (Intermediate)
              </ResumeSubItem>
            </ResumeItem>
          </ResumeCard>
        </Paper>
    );
}

export default ResumePage;
