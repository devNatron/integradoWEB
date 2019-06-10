
package web.model;

import java.time.Year;

public class curso implements java.io.Serializable{
    private String nomeCurso, area, grau, turno, nomeCampus, siglaInstituicao;
    private int duracao, notaEnade, anoCriacao;
    
    public curso(){
        nomeCurso = "";
        area = "";
        grau = "";
        turno = "";
        nomeCampus = "";
        siglaInstituicao = "";
        duracao = 0;
        notaEnade = 0;
        anoCriacao = 0;
    }
    
    /**
     * @return the nomeCurso
     */
    public String getNomeCurso() {
        return nomeCurso;
    }

    /**
     * @param nomeCurso the nomeCurso to set
     */
    public void setNomeCurso(String nomeCurso) {
        this.nomeCurso = nomeCurso;
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
        return nomeCampus;
    }

    /**
     * @param nomeCampus the nomeCampus to set
     */
    public void setNomeCampus(String nomeCampus) {
        this.nomeCampus = nomeCampus;
    }

    /**
     * @return the siglaInstituicao
     */
    public String getSiglaInstituicao() {
        return siglaInstituicao;
    }

    /**
     * @param siglaInstituicao the siglaInstituicao to set
     */
    public void setSiglaInstituicao(String siglaInstituicao) {
        this.siglaInstituicao = siglaInstituicao;
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
     * @return the notaEnade
     */
    public int getNotaEnade() {
        return notaEnade;
    }

    /**
     * @param notaEnade the notaEnade to set
     */
    public void setNotaEnade(int notaEnade) {
        if(notaEnade >= 0 && notaEnade <= 5)
            this.notaEnade = notaEnade;
    }

    /**
     * @return the anoCriacao
     */
    public int getAnoCriacao() {
        return anoCriacao;
    }

    /**
     * @param anoCriacao the anoCriacao to set
     */
    public void setAnoCriacao(int anoCriacao) {
        if(anoCriacao > 1980 && anoCriacao <= Year.now().getValue())
        this.anoCriacao = anoCriacao;
    }

}
