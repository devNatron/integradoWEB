/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.controller;

import com.integradoWEB.integradoWEB.models.curso;
import com.integradoWEB.integradoWEB.repository.cursoRepository;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Novaes
 */
@RestController
@RequestMapping(value = "/api")
public class cursoController {

    @Autowired
    cursoRepository cursoRepo;

    /* DEFINICAO DE ROTAS E CHAMADA DE FUNCOES NA DAO*/
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/cursoTodos", produces = "application/json;charset=UTF-8")
    public List<curso> listaCurso() {
        return cursoRepo.buscarTodos();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/cursoPorArea", consumes = "application/json", produces = "application/json")
    public List<curso> listaCursoPorArea(@RequestBody Map<String, String> payload) {
        return cursoRepo.buscarPorArea(payload.get("area"));
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/filter", consumes = "application/json", produces = "application/json")
    public List<curso> listaCursoPorNomeNatureza(@RequestBody Map<String, String> payload){
        return cursoRepo.buscarPorNomeNatureza(payload.get("nome"), payload.get("natureza"), payload.get("grau"));   
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/modalCurso", consumes = "application/json", produces = "application/json")
    public List<curso> listaCursoModal(@RequestBody Map<String, String> payload){
        return cursoRepo.buscaModal(payload.get("nome"), payload.get("campus"));
    }
}
