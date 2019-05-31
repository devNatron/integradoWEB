import React from 'react';

import "./styles.css";
import 'react-tabulator/lib/styles.css'; // required styles
import "./tabulator.min.css"; // theme
import { ReactTabulator } from 'react-tabulator'; // for React 15.x, use import { React15Tabulator }

var tableData = [
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 5},
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 3},
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 4},
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 0},
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 2},
]

let options = {
    pagination:"local",
    paginationSize:10,
    data:tableData,
    layout:"fitDataFill",
}

const colorOptions = {
    [""]: "&nbsp;",
    red: "red",
    green: "green",
    yellow: "yellow"
  };

const columns = [
    {title:'sigla', field:"sigla", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'campus', field:"campus", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'estado', field:"estado", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'cidade', field:"cidade", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'curso', field:"curso", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'grau', field:"grau", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'turno', field:"turno", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'duracao (semestre(s)', field:"duracao", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'enade', field:"enade", sorter:"number", formatter:"star"},
    /* {
        title: "Favourite Color",
        field: "color",
        editor: "select",
        editorParams: {
          allowEmpty: true,
          showListOnEmpty: true,
          values: colorOptions
        },
        headerFilter: "select",
        headerFilterParams: { values: colorOptions }
      },
      {
        title: "Favourite Color",
        field: "color2",
        editor: "select",
        editorParams: {
          allowEmpty: true,
          showListOnEmpty: true,
          values: colorOptions
        },
        headerFilter: "select",
        headerFilterParams: { values: colorOptions }
      }, */
]

class Table extends React.Component {
    //ref.table.setFilter("uptime", ">", 10);
    componentDidMount() {
        //console.log(this.props.name)
        /* fetch('https://api.mydomain.com')
        .then(response => response.json())
        .then(data => this.setState({ data })); */
    }

    setFilter = () => {
        setTimeout(() => {
            //console.log(this.ref.table)
            //this.ref.table.setFilter("color", "=", "green");
        }, 0);
    }
    
    render(){
        return (
            <main className="Content page tabela">
                <div className="intro-wrapper">
                    <p>Tabela de relacões melhores universidades de São Paulo</p>
                </div>
                <ReactTabulator 
                    ref={ref => (this.ref = ref)} /* atribui a referencia para table a this.ref */
                    columns={columns} 
                    data={tableData}
                    options={options}
                    className="table"
                    tableBuilt = {this.setFilter}
                    rowBorderColor="#000"
                />
            </main >
        )
    }
}

export default Table
