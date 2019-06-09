
package br.com.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import br.com.web.model.campus;
import br.com.web.model.instituicao;
import br.com.web.model.curso;
import br.com.web.persistence.ConexaoDAO;
 

@Controller
public class BuscaController{
    
    private ConexaoDAO connectionDAO;
    private instituicao instituicaoModel;
    private campus campusModel;
    private curso cursoModel;
    
    @RequestMapping("/")//ver o url na aplicação
    public String loginForm(){
        return "temp";
    }
    
    @RequestMapping("")
    public String buscaCurso(){
        return "a";
    }

}
