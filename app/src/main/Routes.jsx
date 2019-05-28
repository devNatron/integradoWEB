import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/Home/'
import Table from '../components/Templates/Table'
import InfoBar from '../components/Templates/InfoBar'

export default props => 
    <Switch location={props.location}>
        <Route exact path='/' component={Home} />
        <Route exact path='/tabela' component={Table} />
        <Route path='/home' component={Home} />
        <Route path='/tabela/pesquisa-por-area' render={(props) => <Table {...props} teste='abacate'/>} />
        <Route path='/tabela/ranking-campi-cursos' render={(props) => <Table {...props} teste="batata"/>} />
        <Redirect from='*' to='/' />
    </Switch>
    
/* <Route path='/tabela' render={(props) => <Table {...props}/>} /> */