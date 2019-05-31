import React from 'react';
import { Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup} from 'react-transition-group';

import "./app.css"

import Routes from './Routes'
import Nav from '../components/Templates/Nav'
import InfoBar from '../components/Templates/InfoBar'

class App extends React.Component {
  render(){
    return (
        <div className="app">
          <InfoBar />
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={400}
                classNames="fade"
                >
                <Routes location={location}/>
              </CSSTransition>
            </TransitionGroup>
          )} />
          <Nav />
        </div>
    )
  }
}

export default App;
