import React from 'react'
import {Link} from 'react-router-dom';

import './styles.css'

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';


class Home extends React.Component {
    state = {
        area: "",
        area2: "",
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    render(){
        return (
            <main className="Content page">
                <div className="intro-wrapper">
                    <p>Você pode preencher os campos abaixo para filtrarmos as faculdades de acordo com o seu perfil<br/> 
                        mas se preferir, pode pular as perguntas e ver a lista completa :) <br/></p>
                </div>
                <div className="form-wrapper">
                    <form>
                        <div className="filters-wrapper">
                            <div>
                                <label>Area desejada: </label>
                                <Input id="area" name="area" className="input-area" value={this.state.area} 
                                onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div>
                                <label>Estado de preferência: </label>
                                <NativeSelect id="estado" name="area" className="input-area"></NativeSelect>
                            </div>
                            <div>
                                <label>Area desejada: </label>
                                <Input id="area2" name="area2" className="input-area2" value={this.state.area2} 
                                onChange={this.handleChange.bind(this)}/>
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