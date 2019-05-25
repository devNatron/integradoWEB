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
    {slice:"slice 1", uptime: 30, computer: [4, 2, 8], network: [4, 2, 8]},
    {slice:"slice 2", uptime: 1, computer: [4, 2, 8], network: [4, 2, 8]},
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
const columns = [
    {title:"slice", field:"slice", sorter:"string"},
    {title:"uptime", field:"uptime", sorter:"number", align:"center", formatter:"plaintext"},
    {title:"computer", field:"computer", align:"center", formatter: summaryFormat},
    {title:"network", field:"network", align:"center", formatter: summaryFormat}
]

export default () => (
    <main className="Content page">
        <div className="intro-wrapper">
            <p>Você pode preencher os campos abaixo para filtrarmos as faculdades de acordo com o seu perfil<br/> 
                mas se preferir, pode pular as perguntas e ver a lista completa :) <br/></p>
        </div>
        <ReactTabulator columns={columns} data={tableData} options={options} className="table"/>
        {/* <div className="table-wrapper" id="table">
        </div> */}
    </main >
);