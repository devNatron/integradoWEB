import React from 'react'
import {Link} from 'react-router-dom';

import './styles.css'
import lista_estados from '../../../assets/configs/lista_estados'

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
    state = {
        area: "",
        curso: "",
        grau:"",
        estado: "",
        lista_siglas: []
    }
    componentDidMount() {
        this.setState({lista_siglas: lista_estados})
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    render(){
        return (
            <main className="Content page-animation home">
                <h1>UniBrasil <FontAwesomeIcon icon={faGraduationCap} /></h1>
                <h2>Você pode preencher os campos abaixo para filtrarmos as faculdades de acordo com o seu perfil<br/> 
                    mas se preferir, pode pular as perguntas e ver a lista completa :) <br/></h2>
                <div className="form-wrapper">
                    <form>
                        <div className="filters-wrapper">
                            {/* <FontAwesomeIcon icon={faCoffee}/> */}
                            <div>
                                <label>Área desejada: </label>
                                <Input id="input-area" name="area" value={this.state.area} 
                                onChange={this.handleChange.bind(this)}/>
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
                                    <option value="AC">Licenciatura</option>,
                                    <option value="AL">Bacharelado</option>,
                                    <option value="AP">Tecnólogo</option>,
                                    <option value="AM">Mestrado</option>,
                                    <option value="AM">Doutorado</option>
                                </NativeSelect>
                            </div>
                            <div>
                                <label>Estado de preferência: </label>
                                <NativeSelect id="input-estado" name="estado" value={this.state.estado} 
                                onChange={this.handleChange.bind(this)}>
                                    {this.state.lista_siglas}
                                </NativeSelect>
                            </div>
                        </div>
                        <div id="botoes">
                            <Link to={{ pathname:'/tabela', data:{filter: false}}} activeClassName="active">
                                <Button id="pular" variant="contained" color="primary">Pular</Button>
                            </Link>
                            <Link to={{ pathname:'/tabela', data:{filter: true, area: this.state.area}}} activeClassName="active">
                                <Button id="aplicar" variant="contained" color="primary">Aplicar Filtros</Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </main >
        )
    }
}

export default Home
/* https://material-ui.com/demos/text-fields/ */