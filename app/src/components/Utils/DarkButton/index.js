import React from 'react'
import {NavLink} from 'react-router-dom';

import "./styles.css"


class DarkButton extends React.Component {
    state = {
        bgColor: "#282828"
    }

    handleClick = () => {
        this.setState({bgColor: "#666"})
    }

    render(){
        return (
            <NavLink to={this.props.link} activeClassName="active"> 
                <button className="dark-button" onClick={this.handleClick} style={{backgroundColor: this.state.bgColor}}>
                    {this.props.nome}
                </button>
            </NavLink>
        )
    }
}

export default DarkButton