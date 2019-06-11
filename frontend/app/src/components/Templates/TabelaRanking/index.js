import React from 'react';
import Table from '../../Utils/Table'
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/TextField';
import lista_estados from '../../../assets/configs/lista_estados'

import './styles.css';

class tabela extends React.Component {
  state = {
    area: "",
    lista_siglas: lista_estados
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }
  
  columns = [
    {title:'sigla', field:"sigla", sorter:"string", align:"center", formatter:"plaintext"},
    // {title:'nome da instituição', field:"nome_instituicao", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'natureza administrativa', field:"natureza", sorter:"string", align:"center", formatter:"plaintext"},
    // {title:'campus', field:"campus", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'estado', field:"estado", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'cidade', field:"cidade", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'número de cursos', field:"cont", sorter:"string", align:"center", formatter:"plaintext"},
   ]
 
   tableData = [
     {sigla:"UFScar", natureza:'Publica', estado: 'SP', cidade:'Sorocaba', cont: 5},
     {sigla:"UFScar", natureza:'Publica', estado: 'RJ', cidade:'Sorocaba', cont: 4},
     {sigla:"UFScar", natureza:'Privada', estado: 'AM', cidade:'Sorocaba', cont: 2},
     {sigla:"UFScar", natureza:'Privada', estado: 'RJ', cidade:'Sorocaba', cont: 1},
     {sigla:"UFScar", natureza:'Privada', estado: 'PE', cidade:'Sorocaba', cont: 3},
   ]

  render() {
    return (
      <main className="Content page-animation page-tabela">
          <div className="intro-wrapper">
              {/* <FontAwesomeIcon icon={faUniversity} className="icon-university"/> */}
              <p>Tabela de relacões melhores universidades de São Paulo</p>
          </div>
          <div className="filters-wrapper">
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
                    <option value="licenciatura">Licenciatura</option>,
                    <option value="bacharelado">Bacharelado</option>,
                    <option value="tecnologo">Tecnólogo</option>,
                    <option value="mestrado">Mestrado</option>,
                    <option value="doutorado">Doutorado</option>
                </NativeSelect>
            </div>
            <div>
                <label>Estado: </label>
                <NativeSelect id="input-estado" name="estado" value={this.state.estado} 
                onChange={this.handleChange.bind(this)}>
                    {this.state.lista_siglas}
                </NativeSelect>
            </div>
            <div className="buttom-apply">
              <Button id="aplicar" variant="contained" color="primary">Aplicar Filtros</Button>
            </div>
          </div>
          <Table data={this.tableData} headers={this.columns}></Table>
      </main>
    )
  }
}

export default tabela;