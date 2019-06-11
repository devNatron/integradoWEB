/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.models;


import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;
/**
 *
 * @author victo
 */

@Entity
@Table(name="curso")
@SecondaryTable(name="campus")

public class consultaNomeNatureza implements Serializable {
    @Id   
    private String sigla;
    
    @Column(table = "campus")
    private String estado;
    
    private String campus;
    
    @Column(table = "campus")
    private String cidade;
    
    private String nome_curso;
    private String grau;
    private String turno;
    private int duracao;
    private int nota_enade;
    
    public consultaNomeNatureza(){
        sigla = "";
        estado = "";
        campus = "";
        cidade = "";
        nome_curso = "";
        grau = "";
        turno = "";
        duracao = 0;
        nota_enade = 0;
    }

    public String getSigla() {
        return sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCampus() {
        return campus;
    }

    public void setCampus(String campus) {
        this.campus = campus;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getNome_curso() {
        return nome_curso;
    }

    public void setNome_curso(String nome_curso) {
        this.nome_curso = nome_curso;
    }

    public String getGrau() {
        return grau;
    }

    public void setGrau(String grau) {
        this.grau = grau;
    }

    public String getTurno() {
        return turno;
    }

    public void setTurno(String turno) {
        this.turno = turno;
    }

    public int getDuracao() {
        return duracao;
    }

    public void setDuracao(int duracao) {
        this.duracao = duracao;
    }

    public int getNota_enade() {
        return nota_enade;
    }

    public void setNota_enade(int nota_enade) {
        this.nota_enade = nota_enade;
    }
    
}