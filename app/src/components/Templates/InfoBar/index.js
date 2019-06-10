import React from 'react';

import './styles.css';


class InfoBar extends React.Component {
    state = {
        inicio: (<p>O UniBrasil é uma aplicação perfeita para aqueles que estão na dúvida de 
                qual curso escolher!<br/>Você pode ver os campi que mais ofertaram cursos 
                recentemente ou escolher uma área de interesse para ver se um dos cursos 
                dela chama sua atenção.<br/>Experimente!</p>),
        pesquisaArea: (<p> Os cursos estão agrupados por áreas comuns de estudo ou atuação. 
            Escolha um dos grupos que você tem interesse para ver todos os cursos relacionados
            a essa área e, em seguida, você pode escolher um 
            curso e ver quais faculdades ofertam-no!</p>)
    } 
    render(){
      return (
        <div className="InfoBar">
            <div className = "TextBox">
                
                {this.state[this.props.stateNav]}

                {/* Inicio: */}
                {/* Selecione uma universidade da lista à direita para ver informacoes sobre ela
                e seus campi */}
                {/* Selecione um curso para ver em qual campus é oferecido e sua área comum*/}
                {/* Selecione um campus da lista à direita para ver os cursos que ele oferece */}
                {/* Pesquisa por área */}
            </div>
        </div>
      )
    }
  }
  
export default InfoBar;