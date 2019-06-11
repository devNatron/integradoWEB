/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.controller;

import com.integradoWEB.integradoWEB.models.campus;
import com.integradoWEB.integradoWEB.models.curso;
import com.integradoWEB.integradoWEB.models.instituicao;
import com.integradoWEB.integradoWEB.repository.campusRepository;
import com.integradoWEB.integradoWEB.repository.cursoRepository;
import com.integradoWEB.integradoWEB.repository.instituicaoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Novaes
 */
@RestController
@RequestMapping(value="/api")
public class controllerMaster {
    @Autowired
    instituicaoRepository instituicaoRepo;
    @Autowired
    cursoRepository cursoRepo;
    @Autowired
    campusRepository campusRepo;
    
    /* DEFINICAO DE ROTAS E CHAMADA DE FUNCOES NA DAO*/
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/teste", produces="application/json;charset=UTF-8")
    public List<campus> listaCam(){
            return campusRepo.buscar();
    }

}
