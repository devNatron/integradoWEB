
package web.persistence;
import web.model.instituicao;
import web.model.campus;
import web.model.curso;
import java.sql.*;
import java.util.List;
import java.util.ArrayList;

/**
 *
 * @author useer
 */
public class ConexaoDAO {
    private Connection connect;
    private Statement state;
    
    public ConexaoDAO() throws ClassNotFoundException, InstantiationException, IllegalAccessException{
        try{
            Class.forName("org.postgresql.Driver").newInstance();
            String conexao = "jdbc:postgresql:" + "//localhost/curso";

            String usuario = "Usuario";
            String senha = "senha_padrao";

            connect = DriverManager.getConnection(conexao,usuario,senha);
            state = connect.createStatement();
        } catch(Exception e){
            System.out.println(e);
        }
    }
    
    public List<String> consultaCursoNaturezaAdm (String termoCurso, String naturezaAdm){
        ResultSet result;
        List<String>res = new ArrayList();
        
        //Iniciar objetos?
        instituicao instituicaoTemp;
        campus campusTemp;
        curso cursoTemp;

        try{
            state.execute("SELECT ");
            //criar views para fazer select
            result = state.getResultSet();

            while (result.next()){
                //Recupera os atributos de cada tupla pelo seu indice
                //result.getString(1),result.getString(2),result.getString(3));
                //usar indices para pegar campos de tabelas separadas
                //res.add(instituicaoTemp);
            }

        }catch(Exception e){
            System.out.println(e);
        }finally {
            if (null != state) {
              try { state.close();} catch(Exception ex) {};
            }
            if (null != connect) {
              try { connect.close();} catch(Exception ex) {};
            }
        }
        return res;
    } 
}
