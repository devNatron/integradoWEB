import React from 'react'
import {NavLink} from 'react-router-dom';

import "./styles.css"


class DarkButton extends React.Component {
    handleClick = (e) => {
        const buttons = e.target.parentElement.parentElement.children;
        for(let i = 0; i < buttons.length; i++) {
            //here you set all buttons to default color
            buttons[i].firstElementChild.classList.add('btn-default');
            buttons[i].firstElementChild.classList.remove('btn-active');
        }

        e.target.classList.add('btn-active');
    }

    render(){
        return (
            <NavLink to={this.props.link} activeClassName="active"> 
                <button className={this.props.class} onClick={this.handleClick}>
                    {this.props.nome}
                </button>
            </NavLink>
        )
    }
}

export default DarkButton