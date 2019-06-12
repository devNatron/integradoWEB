import React from 'react'
import { Switch, Route } from 'react-router'

import Home from '../components/Templates/Home/'
// import Table from '../components/Templates/Table'
import TabelaInicio from '../components/Templates/TabelaInicio'
import TabelaArea from '../components/Templates/TabelaArea'
import TabelaRanking from '../components/Templates/TabelaRanking'

export default props => 
    <Switch location={props.location}>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/tabela' component={TabelaInicio} />
        <Route path='/home' component={Home} />
        <Route path='/tabela/pesquisa-por-area' component={TabelaArea} />
        <Route path='/tabela/ranking-campi-cursos' component={TabelaRanking} />
        {/* <Redirect from='*' to='/home' /> */}
        <Route path='*' component={Home} />
    </Switch>
    
/* <Route path='/tabela' render={(props) => <Table {...props}/>} /> */