import React from 'react';
import DarkButton from '../../Utils/DarkButton';

import './styles.css';

export default (props) => (
    <div className="Nav">
        <DarkButton nome="Início" link="/home" class="dark-button btn-active"/>
        <DarkButton nome="Pesquisa por área" link="/tabela/pesquisa-por-area" class="dark-button btn-default"/>
        <DarkButton nome="Campi com mais cursos" link="/tabela/ranking-campi-cursos" class="dark-button btn-default"/>
    </div>
);