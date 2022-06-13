import logo from './logo.svg';
import './App.css';

import HomePage from './pages/HomePage.js';
import ResumePage from './pages/ResumePage.js';
import ContactPage from './pages/ContactPage.js';
import PortfolioPage from './pages/PortfolioPage.js';
import DevPage from './pages/DevPage.js';
import DataPage from './pages/DataPage.js';
import DemoPage from './pages/DemoPage.js';
import BlogPage from './pages/BlogPage.js';
import PsNavBar from './components/PsNavBar.js';

import React from 'react';
import {Route, Routes, HashRouter, BrowserRouter} from "react-router-dom";

import {AppBar, Toolbar, ListItem, Typography, Drawer,  Box} from '@mui/material';

function App() {
  function getPath(inPath) {
    if (inPath === "/") {
      return "home";
    }
    return inPath.substring(1);
  }
  document.title = "Matthew Sheldon";
  const loc = getPath(window.location.pathname);
  console.log(loc)
  return (
    <>
    <Box fixed className="App">
    <BrowserRouter>
      <PsNavBar page={loc} />
      <Routes>
        <Route path="/resume" element={<ResumePage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/dev" element={<DevPage />}></Route>
        <Route path="/demo" element={<DemoPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/data" element={<DataPage />}></Route>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
    </Box>
    </>
  );
}

export default App;
