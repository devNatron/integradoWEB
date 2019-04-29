import React from 'react'

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
            <button className="dark-button" onClick={this.handleClick} style={{backgroundColor: this.state.bgColor}}>
                {this.props.nome}
            </button>
        )
    }
}

export default DarkButton