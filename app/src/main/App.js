import React from 'react';
import { Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup} from 'react-transition-group';

import "./app.css"

import Routes from './Routes'
import Nav from '../components/Templates/Nav'
import InfoBar from '../components/Templates/InfoBar'

class App extends React.Component {
  state = {
    // Infobar: "/home"
    Infobar: this.props.location.pathname
    // image: "/ufscar"
  } 

  changeInfobarData = function(texto) {
    // console.log("app.js: " + texto)
    this.setState({Infobar: texto})
  }

  render(){
    return (
        <div className="app">
          <InfoBar stateNav={this.state.Infobar}/>
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
          <Nav sendData={this.changeInfobarData.bind(this)} />
        </div>
    )
  }
}

export default App;
