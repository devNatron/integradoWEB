
package br.com.web.model;

public class instituicao implements java.io.Serializable{

    private String sigla;
    private String nomeInstituicao;
    private String naturezaAdministrativa;
    private int notaIGC;
    
        
    public instituicao(){
        sigla = "";
        nomeInstituicao = "";
        naturezaAdministrativa = "";
        notaIGC = 0;
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
        return nomeInstituicao;
    }

    /**
     * @param nomeInstituicao the nomeInstituicao to set
     */
    public void setNomeInstituicao(String nomeInstituicao) {
        this.nomeInstituicao = nomeInstituicao;
    }

    /**
     * @return the naturezaAdministrativa
     */
    public String getNaturezaAdministrativa() {
        return naturezaAdministrativa;
    }

    /**
     * @param naturezaAdministrativa the naturezaAdministrativa to set
     */
    public void setNaturezaAdministrativa(String naturezaAdministrativa) {
        if("Pública".equals(naturezaAdministrativa) || "Privada".equals(naturezaAdministrativa))
            this.naturezaAdministrativa = naturezaAdministrativa;
        else if("pública".equals(naturezaAdministrativa) || "publica".equals(naturezaAdministrativa))
            this.naturezaAdministrativa = "Pública";
        else if("privada".equals(naturezaAdministrativa))
            this.naturezaAdministrativa = "Privada";
    }

    /**
     * @return the notaIGC
     */
    public int getNotaIGC() {
        return notaIGC;
    }

    /**
     * @param notaIGC the notaIGC to set
     */
    public void setNotaIGC(int notaIGC) {
        if(notaIGC >= 0 && notaIGC <= 5)
            this.notaIGC = notaIGC;
    }
}
