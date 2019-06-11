import React from 'react';
import DarkButton from '../../Utils/DarkButton';
import './styles.css';

export default () => (
    <div className="Menu">
    {/* <p>Você pode usar os botões a baixo para navegar entre as tabelas do projeto!</p> */}
        <DarkButton nome = "Instituições"/>
        <DarkButton nome = "Cursos"/>
        <DarkButton nome = "Campi"/>
    </div>
);