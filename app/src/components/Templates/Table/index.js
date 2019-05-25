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
    {slice:"slice 1", uptime: 30, computer: [4, 2, 8], network: [4, 2, 8], color: 'green', color2: 'blue'},
    {slice:"slice 2", uptime: 1, computer: [4, 2, 8], network: [4, 2, 8], color2: 'red'},
    {slice:"slice 3", uptime: 1, computer: [4, 2, 8], network: [4, 2, 8]},
    {slice:"slice 4", uptime: 1, computer: [4, 2, 8], network: [4, 2, 8]},
    {slice:"slice 5", uptime: 1, computer: [4, 2, 8], network: [4, 2, 8]},
]

let options = {
    pagination:"local",
    paginationSize:5,
    data:tableData,
    layout:"fitColumns",
}

const colorOptions = {
    [""]: "&nbsp;",
    red: "red",
    green: "green",
    yellow: "yellow"
  };

const columns = [
    {title:"slice", field:"slice", sorter:"string"},
    {title:"uptime", field:"uptime", sorter:"number", align:"center", formatter:"plaintext"},
    {title:"computer", field:"computer", align:"center", formatter: summaryFormat},
    {title:"network", field:"network", align:"center", formatter: summaryFormat},
    {
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
      },
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
            this.ref.table.setFilter("color", "=", "green");
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
