/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.models;

import java.io.Serializable;
import java.time.Year;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Novaes
 */
@Entity
@Table(name="curso")
public class curso implements Serializable {
    @Id
    private String nome_curso, area, grau, turno, campus, sigla;
    private int duracao, nota_enade, ano_criacao;
    
    public curso(){
        nome_curso = "";
        area = "";
        grau = "";
        turno = "";
        campus = "";
        sigla = "";
        duracao = 0;
        nota_enade = 0;
        ano_criacao = 0;
    }
    
    /**
     * @return the nomeCurso
     */
    public String getNomeCurso() {
        return nome_curso;
    }

    /**
     * @param nomeCurso the nomeCurso to set
     */
    public void setNomeCurso(String nomeCurso) {
        this.nome_curso = nomeCurso;
    }

    /**
     * @return the area
     */
    public String getArea() {
        return area;
    }

    /**
     * @param area the area to set
     */
    public void setArea(String area) {
        this.area = area;
    }

    /**
     * @return the grau
     */
    public String getGrau() {
        return grau;
    }

    /**
     * @param grau the grau to set
     */
    public void setGrau(String grau) {
        this.grau = grau;
    }

    /**
     * @return the turno
     */
    public String getTurno() {
        return turno;
    }

    /**
     * @param turno the turno to set
     */
    public void setTurno(String turno) {
        this.turno = turno;
    }

    /**
     * @return the nomeCampus
     */
    public String getNomeCampus() {
        return campus;
    }

    /**
     * @param nomeCampus the nomeCampus to set
     */
    public void setNomeCampus(String nomeCampus) {
        this.campus = nomeCampus;
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

    /**
     * @return the duracao
     */
    public int getDuracao() {
        return duracao;
    }

    /**
     * @param duracao the duracao to set
     */
    public void setDuracao(int duracao) {
        if(duracao > 0 && duracao <= 12)
            this.duracao = duracao;
    }

    /**
     * @return the nota_enade
     */
    public int getNotaEnade() {
        return nota_enade;
    }

    /**
     * @param nota_enade the nota_enade to set
     */
    public void setNotaEnade(int nota_enade) {
        if(nota_enade >= 0 && nota_enade <= 5)
            this.nota_enade = nota_enade;
    }

    /**
     * @return the anoCriacao
     */
    public int getAnoCriacao() {
        return ano_criacao;
    }

    /**
     * @param ano_criacao the ano_criacao to set
     */
    public void setAnoCriacao(int ano_criacao) {
        if(ano_criacao > 1980 && ano_criacao <= Year.now().getValue())
        this.ano_criacao = ano_criacao;
    }

    public String getNome_curso() {
        return nome_curso;
    }

    public void setNome_curso(String nome_curso) {
        this.nome_curso = nome_curso;
    }
}
