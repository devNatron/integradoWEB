import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


import './styles.css';

class Nav extends React.Component {
  handleClick = function (texto) {
    // console.log("texto")
    this.props.sendData(texto)
  }
 
  render() {
    return (
      <div className="Nav">
        <NavLink to={{ pathname: '/home', data: { filter: false } }} activeClassName="activeNav">
          <Button className="btnNav" id="btnInicio" variant="contained" color="primary" onClick={() => this.handleClick("/home")}>Inicio</Button>
        </NavLink>
        <NavLink className="btnNav" to={{ pathname: '/tabela/pesquisa-por-area', data: { filter: false } }} activeClassName="activeNav">
          <Button  id="btnArea" variant="contained" color="primary" onClick={() => this.handleClick("/tabela/pesquisa-por-area")}>Pesquisa por área</Button>
        </NavLink>
        <NavLink to={{ pathname: '/tabela/ranking-campi-cursos', data: { filter: false } }} activeClassName="activeNav">
          <Button className="btnNav" id="btnRanking" variant="contained" color="primary" onClick={() => this.handleClick("/tabela/ranking-campi-cursos")}>Campi com mais cursos</Button>
        </NavLink>
      </div>
    )
  }
}

export default Nav;