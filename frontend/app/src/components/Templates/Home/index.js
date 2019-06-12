import React from 'react'
import {NavLink} from 'react-router-dom';

import './styles.css'

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
    state = {
        natureza: "Pública",
        curso: "",
        grau:"",
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    render(){
        return (
            <main className="Content page-animation home">
                <div className="intro-wrapper">
                    <h1>UniBrasil <FontAwesomeIcon icon={faGraduationCap} /></h1>
                    <h2>Você pode preencher os campos abaixo para filtrarmos as faculdades de acordo com o seu perfil<br/> 
                        mas se preferir, pode pular as perguntas e ver a lista completa :) <br/></h2>
                </div>
                <div className="form-wrapper">
                    <form>
                        <div className="filters-wrapper">
                            {/* <FontAwesomeIcon icon={faCoffee}/> */}
                            <div>
                                <label>Natureza administrativa: </label>
                                <NativeSelect id="input-natureza" name="natureza" value={this.state.natureza} 
                                onChange={this.handleChange.bind(this)}>
                                    <option value="Pública">Pública</option>,
                                    <option value="Privada">Privada</option>
                                </NativeSelect>
                            </div>
                            <div>
                                <label>Curso: </label>
                                <Input id="input-curso" name="curso" value={this.state.curso} 
                                onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div>
                                <label>Grau: </label>
                                <NativeSelect id="input-grau" name="grau" value={this.state.grau} 
                                onChange={this.handleChange.bind(this)}>
                                    <option value="">Indiferente</option>,
                                    <option value="Licenciatura">Licenciatura</option>,
                                    <option value="Bacharelado">Bacharelado</option>,
                                    <option value="Tecnólogo">Tecnólogo</option>,
                                    <option value="Mestrado">Mestrado</option>,
                                    <option value="Doutorado">Doutorado</option>
                                </NativeSelect>
                            </div>
                        </div>
                        <div id="botoes">
                            <NavLink to={{ pathname:'/tabela', data:{filter: false}}}>
                                <Button id="pular" variant="contained" color="primary">Pular</Button>
                            </NavLink>
                            <NavLink to={{ pathname:'/tabela', data:{filter: true, nome: this.state.curso, natureza: this.state.natureza, grau: this.state.grau}}}>
                                <Button id="aplicar" variant="contained" color="primary">Aplicar Filtros</Button>
                            </NavLink>
                        </div>
                    </form>
                </div>
            </main >
        )
    }
}

export default Home
/* https://material-ui.com/demos/text-fields/ */