import React from 'react';
import Table from '../../Utils/Table'
import Button from '@material-ui/core/Button';

import NativeSelect from '@material-ui/core/NativeSelect';
import lista_estados from '../../../assets/configs/lista_estados'

import './styles.css';

class tabela extends React.Component {

  componentDidMount() {
    fetch('http://localhost:8080/api/cursoPorArea', {
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({"area": this.state.area}),
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => this.setState({data: data}))
  }

  state = {
    area: "Ciências Exatas e da Terra",
    data: [],
    lista_siglas: lista_estados
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleClick() {
    fetch('http://localhost:8080/api/cursoPorArea', {
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({"area": this.state.area}),
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => this.setState({data: data}))
  }
  
  columns = [
    {title:'sigla', field:"siglaInstituicao", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'curso', field:"nome_curso", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'grau', field:"grau", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'campus', field:"nomeCampus", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'nota Enade', field:"notaEnade", sorter:"number", align:"center", formatter:"star"},
   ]
   tableData = []

  render() {
    return (
      <main className="Content page-animation page-tabelaArea">
          <div className="intro-wrapper">
              {/* <FontAwesomeIcon icon={faUniversity} className="icon-university"/> */}
              <p>Tabela de relacões melhores universidades de São Paulo</p>
          </div>
          <div className="filters-wrapper">
            <div>
                <label>Área Desejada: </label>
                <NativeSelect id="input-area" name="area" value={this.state.area} 
                onChange={this.handleChange.bind(this)}>
                    <option value="Ciências Exatas e da Terra">Ciências Exatas e da Terra</option>,
                    <option value="Ciências Biológicas">Ciências Biológicas</option>,
                    <option value="Engenharias">Engenharias</option>,
                    <option value="Ciências da Saúde">Ciências da Saúde</option>,
                    <option value="Ciências Agrárias">Ciências Agrárias</option>,
                    <option value="Ciências Humanas">Ciências Humanas</option>
                    <option value="Linguística, Letras e Artes">Linguística, Letras e Artes</option>
                    <option value="Outros">Outros</option>
                </NativeSelect>
            </div>
            <div className="buttom-apply">
              <Button id="aplicar" variant="contained" color="primary" onClick={this.handleClick.bind(this)}>Aplicar</Button>
            </div>
          </div>
          <Table data={this.state.data} headers={this.columns}></Table>
      </main>
    )
  }
}

export default tabela;