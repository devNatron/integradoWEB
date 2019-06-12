import React from 'react';

import "./styles.css";
import 'react-tabulator/lib/styles.css'; // required styles
import "./tabulator.min.css"; // theme
import { ReactTabulator } from 'react-tabulator'; // for React 15.x, use import { React15Tabulator }
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


import Modal from 'react-modal';



class Table extends React.Component {
    rowClick = async (e) => {
        let curso = e.target.parentElement.childNodes[1].innerText;
        let campus = e.target.parentElement.childNodes[3].innerText;
        await fetch('http://localhost:8080/api/modalCurso', {
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({"nome": curso, "campus": campus}),
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => this.setState({modal: data[0]}))

        this.setState({modalIsOpen: true})
    }

    state = {
        modalIsOpen: false,
        modal: []
    };
  
    openModal = this.openModal.bind(this);
    afterOpenModal = this.afterOpenModal.bind(this);
    closeModal = this.closeModal.bind(this);

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.innerHTML = this.subtitle.innerHTML.concat(this.state.modal.siglaInstituicao)
        this.nome.innerHTML = this.state.modal.nome_curso;
        this.area.innerHTML = this.state.modal.area;
        this.nota.innerHTML = this.state.modal.notaEnade;
        this.grau.innerHTML = this.state.modal.grau;
        this.duracao.innerHTML = `${this.state.modal.duracao} semestre(s)`;
        this.ano.innerHTML = this.state.modal.anoCriacao;
        this.campus.innerHTML = this.state.modal.nomeCampus;
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    options = {
        pagination:"local",
        paginationSize:8,
        layout:"fitData",
        initialSort:[
            {column: this.props.sort, dir:"desc"}, //sort by this first
        ] 
    }
    
    render(){
        return (
            <React.Fragment>
                <ReactTabulator 
                    ref={ref => (this.ref = ref)} /* atribui a referencia para table a this.ref */
                    columns={this.props.headers} 
                    data={this.props.data}
                    options={this.options}
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
                                backgroundColor: 'rgba(225, 231, 241, 0.75)',
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} className="icon-close" onClick={this.closeModal}/>
                        <h2 ref={subtitle => this.subtitle = subtitle}>Informações adicionais - </h2>
                        <div className="modal-wrapper">
                            <div><label>- Nome do curso: </label> <span ref={nome => this.nome = nome}>Erro</span></div>
                            <div><label>- Grupo de Área: </label> <span ref={area => this.area = area}>Erro</span></div>
                                                
                            <div><label>- Nota: </label> <span ref={nota => this.nota = nota}>-1</span></div>
                            <div><label>- Grau: </label> <span ref={grau => this.grau = grau}>Erro</span></div>
    
                            <div><label>- Duração: </label> <span ref={duracao => this.duracao = duracao}>Erro</span></div>
                            <div><label>- Ano de Criação do Curso: </label> <span ref={ano => this.ano = ano}>-1</span></div>

                            <div><label>- Campus: </label> <span ref={campus => this.campus = campus}>Erro</span></div>
                        </div>
                    </Modal>
                </div>
            </React.Fragment>
        )
    }
}

export default Table
