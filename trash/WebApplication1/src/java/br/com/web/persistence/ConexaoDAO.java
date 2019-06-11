
package br.com.web.persistence;
import br.com.web.model.instituicao;
import br.com.web.model.campus;
import br.com.web.model.curso;
import java.sql.*;
import java.util.List;
import java.util.ArrayList;

                //result.getString(1),result.getString(2),result.getString(3));
                //res.add(instituicaoTemp);

public class ConexaoDAO {
    private Connection connect;
    private PreparedStatement state;
    /*PreparedStatement stmt = connection.prepareStatement("SELECT * FROM users WHERE userid=? AND password=?");
    stmt.setString(1, userid);
    stmt.setString(2, password);
    ResultSet rs = stmt.executeQuery();*/
    
    public ConexaoDAO() throws ClassNotFoundException, InstantiationException, IllegalAccessException{
        try{
            Class.forName("org.postgresql.Driver").newInstance();
            String conexao = "jdbc:postgresql:" + "//localhost:5432/cursos";
            
            String usuario = "postgres";
            String senha = "1234";

            connect = DriverManager.getConnection(conexao,usuario,senha);
        } catch(Exception e){
            e.printStackTrace();
            System.out.println("Error: something went wrong...");
        }
    }
    
    public List consultaCursoNaturezaAdm (String termoCurso, String naturezaAdm){
        ResultSet result;
        List<String>res = new ArrayList();
        
        curso cursoTemp = new curso();
        campus campusTemp = new campus();

        try{
           state = connect.prepareStatement("SELECT (?,?)");  
           state.setString(1, termoCurso); 
           state.setString(2, naturezaAdm);
           state.executeQuery();
           
           result = state.getResultSet();

           while (result.next()){
                     
                cursoTemp.setSiglaInstituicao(result.getString("sigla"));
                cursoTemp.setNomeCampus(result.getString("nome_campus"));
                campusTemp.setEstado(result.getString("estado"));
                campusTemp.setCidade(result.getString("cidade"));
                cursoTemp.setNomeCurso(result.getString("nome_curso"));
                cursoTemp.setGrau(result.getString("grau"));
                cursoTemp.setTurno(result.getString("turno"));
                cursoTemp.setDuracao(result.getInt("duracao"));
                cursoTemp.setNotaEnade(result.getInt("nota_enade"));
                
                res.add(cursoTemp.getSiglaInstituicao());
                res.add(cursoTemp.getNomeCampus());
                res.add(campusTemp.getEstado());
                res.add(campusTemp.getCidade());
                res.add(cursoTemp.getNomeCurso());
                res.add(cursoTemp.getGrau());
                res.add(cursoTemp.getTurno());
                res.add(Integer.toString(cursoTemp.getDuracao()));
                res.add(Integer.toString(cursoTemp.getNotaEnade()));
           
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
    
    
    public List ranquearCampus (int anoInicio, int anoFim){
        ResultSet result;
        List<String>res = new ArrayList();
        
        instituicao instituicaoTemp = new instituicao();
        campus campusTemp = new campus();
        String contagem;

        try{
           state = connect.prepareStatement("SELECT (?,?)");  
           state.setInt(1, anoInicio); 
           state.setInt(2, anoFim);
           state.executeQuery();
           
           result = state.getResultSet();

           while (result.next()){
                     
                instituicaoTemp.setSigla(result.getString("sigla"));
                instituicaoTemp.setNomeInstituicao(result.getString("nome_instituicao"));
                instituicaoTemp.setNaturezaAdministrativa(result.getString("natureza_administrativa"));
                campusTemp.setNomeCampus(result.getString("nome_campus"));
                campusTemp.setEstado(result.getString("estado"));
                campusTemp.setCidade(result.getString("cidade"));
                contagem = result.getString("cont");
                
                
                res.add(instituicaoTemp.getSigla());
                res.add(instituicaoTemp.getNomeInstituicao());
                res.add(instituicaoTemp.getNaturezaAdministrativa());
                res.add(campusTemp.getNomeCampus());
                res.add(campusTemp.getEstado());
                res.add(campusTemp.getCidade());
                res.add(contagem);
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
    
    public List teste() throws SQLException{
            ResultSet result;
            List<String>res = new ArrayList();
            String a;
            
           state = connect.prepareStatement("SELECT * from campus");  
           state.executeQuery();
           
           result = state.getResultSet();

           while (result.next()){
               
               for(int i = 1; i <= 4; i++)
                res.add(result.getString(i));
           }
           return res;
     }
    
}
