/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.models;

import java.io.Serializable;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Novaes
 */
@Entity
@Table(name="instituicao")
public class instituicao implements Serializable {
    
    @Id
    @Column(name = "sigla")
    private String sigla;
    private String nome_instituicao, natureza_administrativa;
    private int nota_IGC;
//    @OneToMany
//    @OneToMany(fetch = FetchType.EAGER, cascade = {CascadeType.ALL}, mappedBy = "instituicao")  
//    private Set<campus> campi;
    @OneToMany(mappedBy = "inst", cascade = CascadeType.ALL)
    private Set<campus> campi;
    
    public instituicao(){
        sigla = "";
        nome_instituicao = "";
        natureza_administrativa = "";
        nota_IGC = 0;
    }
    
    /**
     * @return the sigla
     */
    public String getSigla() {
        return sigla;
    }

    /**
     * @param sigla the sigla to set
     */
    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    /**
     * @return the nomeInstituicao
     */
    public String getNomeInstituicao() {
        return nome_instituicao;
    }

    /**
     * @param nomeInstituicao the nomeInstituicao to set
     */
    public void setNomeInstituicao(String nomeInstituicao) {
        this.nome_instituicao = nomeInstituicao;
    }

    /**
     * @return the naturezaAdministrativa
     */
    public String getNaturezaAdministrativa() {
        return natureza_administrativa;
    }

    /**
     * @param naturezaAdministrativa the naturezaAdministrativa to set
     */
    public void setNaturezaAdministrativa(String naturezaAdministrativa) {
        if("Pública".equals(naturezaAdministrativa) || "Privada".equals(naturezaAdministrativa))
            this.natureza_administrativa = naturezaAdministrativa;
        else if("pública".equals(naturezaAdministrativa) || "publica".equals(naturezaAdministrativa))
            this.natureza_administrativa = "Pública";
        else if("privada".equals(naturezaAdministrativa))
            this.natureza_administrativa = "Privada";
    }

    /**
     * @return the notaIGC
     */
    public int getNotaIGC() {
        return nota_IGC;
    }

    /**
     * @param notaIGC the notaIGC to set
     */
    public void setNotaIGC(int notaIGC) {
        if(notaIGC >= 0 && notaIGC <= 5)
            this.nota_IGC = notaIGC;
    }
}
