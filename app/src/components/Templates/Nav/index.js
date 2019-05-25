import React from 'react';
import DarkButton from '../../Utils/DarkButton';

import './styles.css';

export default () => (
    <div className="Nav">
        <DarkButton nome="Início" link="/home"/>
        <DarkButton nome="Pesquisa por área" link="/tabela" />
        <DarkButton nome="Campi com mais cursos" link="/"/>
    </div>
);