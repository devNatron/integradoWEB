import React from 'react';
import DarkButton from '../../Utils/DarkButton';

import './styles.css';

class Nav extends React.Component {
    handleClick = function(texto){
        console.log("texto")
        this.props.sendData(texto)

    }
    render(){
      return (
        <div className="Nav"> 
        <DarkButton nome="Início" link="/home" class="dark-button btn-active" onClick={() => this.handleClick("inicio")}/>
        <DarkButton nome="Pesquisa por área" link="/tabela/pesquisa-por-area" class="dark-button btn-default margin-10" onClick={() => this.handleClick("pesquisaArea")}/>
        <DarkButton nome="Campi com mais cursos" link="/tabela/ranking-campi-cursos" class="dark-button btn-default" onClick={() => this.handleClick("ranking")}/>
        </div>
      )
    }
  }
  
export default Nav;