import React, {Fragment} from 'react';

import './styles.css';


export default () => (
    <div className="InfoBar">
        <h1>Bem vindo ao UniBrasil!</h1>
        <div className = "TextBox">
            <p>
                O UniBrasil é o app preferido para aqueles que estão na dúvida de qual curso escolher! 
                Descubra os cursos de ensino superior que mais combinam com você. 
            </p>
            <p>
                Você pode ver os campi que mais ofertaram cursos recentemente (quanto mais melhor, né?) 
                ou escolher uma área de interesse para ver se um dos cursos dela chama sua atenção. 
                Experimente!
            </p> 
            {/* Inicio: */}
            {/* Selecione uma universidade da lista à direita para ver informacoes sobre ela
             e seus campi */}
            {/* Selecione um curso para ver em qual campus é oferecido e sua área comum*/}
            {/* Selecione um campus da lista à direita para ver os cursos que ele oferece */}
            {/* Pesquisa por área */}
            {/* <p> Os cursos estão agrupados por áreas comuns de estudo ou atuação. 
            Escolha um dos grupos que você tem interesse para ver todos os cursos relacionados
            a essa área e, em seguida, você pode escolher um 
            curso e ver quais faculdades ofertam-no!</p>  */}
        </div>
    </div>
);