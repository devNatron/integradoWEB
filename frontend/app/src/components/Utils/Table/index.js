import React from 'react';
import axios from 'axios';

import "./styles.css";
import 'react-tabulator/lib/styles.css'; // required styles
import "./tabulator.min.css"; // theme
import { ReactTabulator } from 'react-tabulator'; // for React 15.x, use import { React15Tabulator }

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


import Modal from 'react-modal';

var tableData = [
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 5},
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 3},
    {sigla:"UFScar", campus:'Sorocaba', estado: 'RJ', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 4},
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 0},
    {sigla:"UFScar", campus:'Sorocaba', estado: 'SP', cidade:'Sorocaba', curso: "Ciência da computacão", grau:'Graduacão', turno:'integral', duracao:'8 semestre(s)', enade: 2},
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

/* const colorOptions = {
    [""]: "&nbsp;",
    red: "red",
    green: "green",
    yellow: "yellow"
  }; */

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

/* const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  }; */

class Table extends React.Component {
    //ref.table.setFilter("uptime", ">", 10);
    componentDidMount() {
        // let url = this.props.location.pathname;
        // if(url === "/tabela" && this.props.location.data){
        //     fetch('/tabelaFiltrada')
        //     .then(response => response.json())
        //     .then(data => this.setState({ data }));
        //     console.log("tem")
        // }
        // else{
        //     console.log("Ntem")
        // }
        // console.log(this.props)
    }

    setFilter = () => {
        setTimeout(() => {
            //console.log(this.ref.table)
            //this.ref.table.setFilter("color", "=", "green");
        }, 0);
    }

    rowClick = (e) => {
            this.setState({modalIsOpen: true});
            fetch('http://localhost:8080/api/inst', {
                headers:{
                    'Content-Type':'application/json',
                },
            })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    state = {
        modalIsOpen: false,
        filter:{
            
        },
        data: this.props.Data,
    };
  
    openModal = this.openModal.bind(this);
    afterOpenModal = this.afterOpenModal.bind(this);
    closeModal = this.closeModal.bind(this);

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
    // references are now sync'd and can be accessed.
        this.subtitle.innerHTML = this.subtitle.innerHTML.concat("UFSCAR")
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }
    
    render(){
        return (
            <React.Fragment>
                <ReactTabulator 
                    ref={ref => (this.ref = ref)} /* atribui a referencia para table a this.ref */
                    columns={columns} 
                    data={tableData}
                    options={options}
                    className="table"
                    tableBuilt = {this.setFilter}
                    rowBorderColor="#000"
                    rowClick={this.rowClick}
                />
                <div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        ariaHideApp={false}
                        className="modal"
                        style={{
                            overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(225, 231, 241, 0.75)'
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} className="icon-close" onClick={this.closeModal}/>
                        <h2 ref={subtitle => this.subtitle = subtitle}>Informações adicionais - </h2>
                        {this.state.data}
                    </Modal>
                </div>
            </React.Fragment>
        )
    }
}

export default Table
