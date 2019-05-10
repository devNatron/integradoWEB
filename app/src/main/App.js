import React from 'react';
import { HashRouter } from 'react-router-dom'
import "./app.css"

import Routes from './Routes'
import Menu from '../components/Templates/Menu'
import Table from '../components/Templates/Table'
import Nav from '../components/Templates/Nav'
import InfoBar from '../components/Templates/InfoBar'
import DarkButton from '../components/Utils/DarkButton'

export default props => 
  <HashRouter>
    <div className="app">
      <InfoBar />
      <Routes/>
      <Nav />
    </div>
  </HashRouter>
