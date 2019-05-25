import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/Home/'
import Table from '../components/Templates/Table'

export default props => 
    <Switch location={props.location}>
        <Route exact path='/' component={Home} />
        <Route path='/tabela' component={Table} />
        <Route path='/home' component={Home} />
        <Redirect from='*' to='/' />
    </Switch>