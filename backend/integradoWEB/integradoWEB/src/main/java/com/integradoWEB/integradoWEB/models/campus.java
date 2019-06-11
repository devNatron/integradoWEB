/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.models;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Novaes
 */
@Entity
@Table(name="campus")
public class campus implements Serializable {
    @Id
    private String nome_campus;
    private String estado;
    private String cidade;
    private String sigla;
    
    public campus(){
        nome_campus = "";
        estado = "";
        cidade = "";
        sigla = "";
    }
    
    /**
     * @return the nome_campus
     */
    public String getNomeCampus() {
        return nome_campus;
    }

    /**
     * @param nome_campus the nome_campus to set
     */
    public void setNomeCampus(String nome_campus) {
        this.nome_campus = nome_campus;
    }

    /**
     * @return the estado
     */
    public String getEstado() {
        return estado;
    }

    /**
     * @param estado the estado to set
     */
    public void setEstado(String estado) {
        this.estado = estado;
    }

    /**
     * @return the cidade
     */
    public String getCidade() {
        return cidade;
    }

    /**
     * @param cidade the cidade to set
     */
    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    /**
     * @return the sigla
     */
    public String getSiglaInstituicao() {
        return sigla;
    }

    /**
     * @param sigla the sigla to set
     */
    public void setSiglaInstituicao(String sigla) {
        this.sigla = sigla;
    }

    public String getNome_campus() {
        return nome_campus;
    }

    public void setNome_campus(String nome_campus) {
        this.nome_campus = nome_campus;
    }
}
