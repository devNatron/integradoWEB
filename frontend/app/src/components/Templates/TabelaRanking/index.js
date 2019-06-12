import React from 'react';
import Table from '../../Utils/Table'
import Button from '@material-ui/core/Button';

import './styles.css';

class tabela extends React.Component {
  state = {
    anoInicial: "2016",
    anoFinal: "2019",
    data: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/ranquearCampi', {
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({"anoInicial": this.state.anoInicial, "anoFinal": this.state.anoFinal}),
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => this.setState({data: data}))
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleClick() {
    fetch('http://localhost:8080/api/ranquearCampi', {
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({"anoInicial": this.state.anoInicial, "anoFinal": this.state.anoFinal}),
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => this.setState({data: data}))
  }
  
  columns = [
    {title:'sigla', field:"sigla", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'nome campus', field:"nome_campus", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'estado', field:"estado", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'cidade', field:"cidade", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'número de cursos', field:"cont", sorter:"number", align:"center", formatter:"plaintext"},
   ]
 
  render() {
    return (
      <main className="Content page-animation page-tabelaRanking">
          <div className="intro-wrapper">
              <p>Tabela de relacões de campus com mais curso em determinado periodo</p>
          </div>
          <div className="filters-wrapper">
            <div>
                <label>Ano Inicial: </label>
                <input type="number" min="1900" max="2099" name="anoInicial" step="1" value={this.state.anoInicial} onChange={this.handleChange.bind(this)}/>
            </div>
            <div>
                <label>Ano Final: </label>
                <input type="number" min="1900" max="2099" name="anoFinal" step="1" value={this.state.anoFinal} onChange={this.handleChange.bind(this)}/>
            </div>
            <div className="buttom-apply">
              <Button id="aplicar" variant="contained" color="primary" onClick={this.handleClick.bind(this)}>Aplicar</Button>
            </div>
          </div>
          <Table data={this.state.data} headers={this.columns} sort={"cont"}></Table>
      </main>
    )
  }
}

export default tabela;