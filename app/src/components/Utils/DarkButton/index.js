import React from 'react'
import {Link} from 'react-router-dom';

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
            <Link to={this.props.link}>
                <button className="dark-button" onClick={this.handleClick} style={{backgroundColor: this.state.bgColor}}>
                    {this.props.nome}
                </button>
            </Link>
        )
    }
}

export default DarkButton