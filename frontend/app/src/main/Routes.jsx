import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/Templates/Home/'
import Table from '../components/Templates/Table'
import Tabela from '../components/Templates/Tabela'

export default props => 
    <Switch location={props.location}>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/tabela' component={Tabela} />
        <Route path='/home' component={Home} />
        <Route path='/tabela/pesquisa-por-area' render={(props) => <Table {...props} teste='abacate'/>} />
        <Route path='/tabela/ranking-campi-cursos' render={(props) => <Table {...props} teste="batata"/>} />
        {/* <Redirect from='*' to='/home' /> */}
        <Route path='*' component={Home} />
    </Switch>
    
/* <Route path='/tabela' render={(props) => <Table {...props}/>} /> */