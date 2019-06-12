import React from 'react';
import Table from '../../Utils/Table'
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/TextField';

import './styles.css';


class tabela extends React.Component {
  componentDidMount() {
    if(this.props.location.data){
      if(this.props.location.data.filter){
        fetch('http://localhost:8080/api/filter', {
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({"nome": this.props.location.data.nome, "natureza": this.props.location.data.natureza, "grau": this.props.location.data.grau}),
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => this.setState({data: data}))
      }
        else{
          fetch('http://localhost:8080/api/cursoTodos', {
              headers:{
                  'Content-Type':'application/json',
              },
          })
          .then(response => response.json())
          .then(data => this.setState({data: data}))
    
        }
    }
      else{
        fetch('http://localhost:8080/api/cursoTodos', {
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then(response => response.json())
        .then(data => this.setState({data: data}))

      }
}

state = {
    curso: "",
    natureza: "Pública",
    grau: "",
    data: [],
  }
  

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleClick() {
    fetch('http://localhost:8080/api/filter', {
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({"nome": this.state.curso, "natureza": this.state.natureza, "grau": this.state.grau}),
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => this.setState({data: data}))
  }
  
  columns = [
    {title:'sigla', field:"siglaInstituicao", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'curso', field:"nome_curso", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'grau', field:"grau", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'Campus', field:"nomeCampus", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'enade', field:"notaEnade", sorter:"number", formatter:"star"}
  ]
  
  render() {
    return (
      <main className="Content page-animation page-tabela">
          <div className="intro-wrapper">
              <p>Selecione um curso da tabela abaixo para ver informações sobre ela
                e seus campi</p>
          </div>
          <div className="filters-wrapper">
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
            <div className="buttom-apply">
              <Button id="aplicar" variant="contained" color="primary" onClick={this.handleClick.bind(this)}>Aplicar Filtros</Button>
            </div>
          </div>
          <Table data={this.state.data} headers={this.columns} sort={"siglaInstituicao"}></Table>
      </main>
    )
  }
}

export default tabela;