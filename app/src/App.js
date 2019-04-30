import React from 'react';

import Menu from './components/Templates/Menu'
import Table from './components/Templates/Table'
import Nav from './components/Templates/Nav'
import InfoBar from './components/Templates/InfoBar'

import DarkButton from './components/Utils/DarkButton'
import "./app.css"

export default () => 
    <div className="app">
      <InfoBar></InfoBar>
      <Menu></Menu>
      <Table></Table>
      <Nav></Nav>
    </div>

