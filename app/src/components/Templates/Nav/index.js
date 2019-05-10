import React from 'react';
import DarkButton from '../../Utils/DarkButton';

import './styles.css';

export default () => (
    <div className="Nav">
        <DarkButton nome="Início" link="/home"/>
        <DarkButton nome="Consulta 1" link="/teste" />
        <DarkButton nome="Consulta 2"/>
    </div>
);