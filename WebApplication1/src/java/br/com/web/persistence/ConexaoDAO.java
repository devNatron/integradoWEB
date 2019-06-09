
package br.com.web.persistence;
import br.com.web.model.instituicao;
import br.com.web.model.campus;
import br.com.web.model.curso;
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
    /*PreparedStatement stmt = connection.prepareStatement("SELECT * FROM users WHERE userid=? AND password=?");
    stmt.setString(1, userid);
    stmt.setString(2, password);
    ResultSet rs = stmt.executeQuery();*/
    
    public ConexaoDAO() throws ClassNotFoundException, InstantiationException, IllegalAccessException{
        try{
            Class.forName("org.postgresql.Driver").newInstance();
            String conexao = "jdbc:postgresql:" + "//localhost/curso";
            
            //Aqui vai depender do que a gente vai por no BD (role Usuario)
            String usuario = "Usuario";
            String senha = "senha_padrao";

            connect = DriverManager.getConnection(conexao,usuario,senha);
            state = connect.createStatement();
        } catch(Exception e){
            e.printStackTrace();
            System.out.println("Error: something went wrong...");
        }
    }
    
    public List consultaCursoNaturezaAdm (String termoCurso, String naturezaAdm){
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
            e.printStackTrace();
            System.out.println("Error: something went wrong...");
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
