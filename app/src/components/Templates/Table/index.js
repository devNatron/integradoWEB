import React from 'react';

import "./styles.css";
import 'react-tabulator/lib/styles.css'; // required styles
import "./tabulator.min.css"; // theme
import { ReactTabulator } from 'react-tabulator'; // for React 15.x, use import { React15Tabulator }

const summaryFormat = function(cell, formatterParams, onRendered){
    //cell - the cell component
    //formatterParams - parameters set for the column
    //onRendered - function to call when the formatter has been rendered
    const values = cell.getValue();
    const checkCircle = "<i class='fa fa-check-circle' style='color: green;'></i>"
    const exclamantionCircle = "<i class='fa fa-exclamation-circle' style='color: orange;'></i>"
    const timesCircle = "<i class='fa fa-times-circle' style='color: red;'></i>"

    return `${checkCircle + values[0] + timesCircle + values[1] + exclamantionCircle + values[2]}`
}

var tableData = [
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 5},
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 5},
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 5},
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 5},
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 5},
]

let options = {
    pagination:"local",
    paginationSize:5,
    data:tableData,
    layout:"fitData",
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
    {title:'curso', field:"curso", sorter:"string", align:"center", formatter:"plaintext", widthGrow:3},
    {title:'grau', field:"grau", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'turno', field:"turno", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'duracao', field:"duracao", sorter:"string", align:"center", formatter:"plaintext"},
    {title:'enade', field:"enade", sorter:"number", formatter:"number"},
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

/* export default () => (
    <main className="Content page">
        <div className="intro-wrapper">
            <p>Tabela de relacões melhores universidades de São Paulo</p>
        </div>
        <ReactTabulator columns={columns} data={tableData} options={options} className="table"/>
    </main >
); */

class Table extends React.Component {
    //ref.table.setFilter("uptime", ">", 10);
    setFilter = () => {
        setTimeout(() => {
            console.log(this.ref.table)
            //this.ref.table.setFilter("color", "=", "green");
        }, 0);
    }
    
    render(){
        return (
            <main className="Content page">
                <div className="intro-wrapper">
                    <p>Tabela de relacões melhores universidades de São Paulo</p>
                </div>
                <ReactTabulator 
                    ref={ref => (this.ref = ref)}
                    columns={columns} 
                    data={tableData}
                    options={options}
                    className="table"
                    tableBuilt = {this.setFilter}
                />
            </main >
        )
    }
}

export default Table
