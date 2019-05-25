import React from 'react'
import {NavLink} from 'react-router-dom';

import './styles.css'

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';

export default () => (
    <main className="Content page">
        <div className="intro-wrapper">
            <p>Você pode preencher os campos abaixo para filtrarmos as faculdades de acordo com o seu perfil<br/> 
                mas se preferir, pode pular as perguntas e ver a lista completa :) <br/></p>
        </div>
        <div className="form-wrapper">
            <form>
                {/* https://material-ui.com/demos/text-fields/ */}
                <div>
                    <label>Area desejada: </label>
                    <Input id="area" name="area" className="input-area"></Input>
                </div>
                <div>
                    <label>Estado de preferência: </label>
                    <NativeSelect id="estado" name="area" className="input-area"></NativeSelect>
                </div>
                <div>
                    <label>Area desejada: </label>
                    <Input id="area2" name="area2" className="input-area2"></Input>
                </div>
                <div id="botoes">
                    <NavLink to="/tabela" activeClassName="active">
                        <Button id="pular" variant="contained" color="primary">Pular</Button>
                    </NavLink>
                    <Button id="aplicar" variant="contained" color="primary">Aplicar Filtros</Button>
                </div>
            </form>
        </div>
    </main >
);