import React from 'react';


import './styles.css';
import area from '../../../assets/image/area.jpeg';
import home from '../../../assets/image/home.jpeg';
import ranking from '../../../assets/image/ranking.jpeg';
const images = {
  area,
  home,
  ranking
};
class InfoBar extends React.Component {
    state = {
      "/home": (<p>O UniBrasil é uma aplicação perfeita para aqueles que estão na dúvida de 
                qual curso escolher!<br/>Você pode ver os campi que mais ofertaram cursos 
                recentemente ou escolher uma área de interesse para ver se um dos cursos 
                dela chama sua atenção.<br/>Experimente!</p>),
      "/tabela": (<p>O UniBrasil é uma aplicação perfeita para aqueles que estão na dúvida de 
        qual curso escolher!<br/>Você pode ver os campi que mais ofertaram cursos 
        recentemente ou escolher uma área de interesse para ver se um dos cursos 
        dela chama sua atenção.<br/>Experimente!</p>),
      "/tabela/pesquisa-por-area": (<p> Os cursos estão agrupados por áreas comuns de estudo ou atuação. 
            Escolha um dos grupos que você tem interesse para ver todos os cursos relacionados
            a essa área. Após escolher um grupo, você pode escolher um 
            curso e ver quais faculdades ofertam-no!</p>),
      "/tabela/ranking-campi-cursos": (<p>Nesta tabela, você pode ver os campi que ofertaram mais cursos
            em um período de anos. <br/> Escolha nos filtros o ano de início e do fim da sua pesquisa e
            você verá, em ordem crescente de número de cursos, os campi.</p>)
    } 
    render(){
      return (
        <div className="InfoBar" style={{backgroundImage : `url(${images[this.props.imgSrc]})`}}>
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