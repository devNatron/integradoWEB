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
    private int cont;

    
    public campus(){
        nome_campus = "";
        estado = "";
        cidade = "";
        sigla = "";
        cont = 0;
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

    public int getCont() {
        return cont;
    }

    public void setCont(int cont) {
        this.cont = cont;
    }

}
