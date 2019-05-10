import React from 'react';
import DarkButton from '../../Utils/DarkButton';
import './styles.css';

export default () => (
    <div className="Nav">
        <DarkButton nome = "Início"/>
        <DarkButton nome = "Pesquisa por área"/>
        <DarkButton nome = "Campi com mais cursos"/>
    </div>
);