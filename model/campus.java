
package web.model;

public class campus implements java.io.Serializable{

    private String nomeCampus;
    private String estado;
    private String cidade;
    private String siglaInstituicao;
    
    public campus(){
        nomeCampus = "";
        estado = "";
        cidade = "";
        siglaInstituicao = "";
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
    
}
