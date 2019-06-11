
package br.com.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import br.com.web.model.campus;
import br.com.web.model.instituicao;
import br.com.web.model.curso;
import br.com.web.persistence.ConexaoDAO;
import java.sql.SQLException;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
 

@Controller
public class BuscaController{
    
    private ConexaoDAO connectionDAO;
    private instituicao instituicaoModel;
    private campus campusModel;
    private curso cursoModel;
    

    @RequestMapping("/a")//ver o url na aplicação
    public String ranqueiaCampus(){
        
      
        return "temp";
    }
    
    @RequestMapping(value= "/as", method=RequestMethod.GET, produces="application/json")
    public @ResponseBody List teste() throws ClassNotFoundException, InstantiationException, IllegalAccessException, SQLException{
        connectionDAO = new ConexaoDAO();
        return connectionDAO.teste();
    }
    
    @RequestMapping("")
    public String buscaCursoNaturezaAdm(){
        
        
        return "temp";
    }

}
