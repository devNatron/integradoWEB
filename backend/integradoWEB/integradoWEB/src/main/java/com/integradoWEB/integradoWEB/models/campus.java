/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author victo
 */
@Entity
@Table(name="campus")
public class campus implements Serializable {
    
    @Id
    @Column(name = "nome_campus")
    private String nome_campus;
    @Id
    @Column(name = "sigla")
    private String sigla;
    @ManyToOne
//    @JoinColumn(name="sigla", referencedColumnName="sigla",insertable = false,updatable = false)
//    @JsonIgnore
    @JoinColumn(name = "sigla")
    private instituicao inst;
    @Column(name = "estado")
    private String estado;
    @Column(name = "cidade")
    private String cidade;
    
    
    public campus(){
        nome_campus = "";
        estado = "";
        cidade = "";
        sigla = ""; 
    }

    public String getNome_campus() {
        return nome_campus;
    }

    public void setNome_campus(String nome_campus) {
        this.nome_campus = nome_campus;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getSigla() {
        return sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }
}
