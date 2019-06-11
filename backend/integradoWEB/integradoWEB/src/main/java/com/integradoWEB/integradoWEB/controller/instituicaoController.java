/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.controller;

import com.integradoWEB.integradoWEB.models.instituicao;
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
public class instituicaoController {
    @Autowired
    instituicaoRepository instituicaoRepo;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/inst", produces="application/json;charset=UTF-8")
    public List<instituicao> listaInst(){
            return instituicaoRepo.findAll();
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/instituicoes/{sigla}", produces="application/json;charset=UTF-8")
    public Optional<instituicao> listainstituicaoUnico(@PathVariable(value="sigla") String sigla){
            return instituicaoRepo.findById(sigla);
    }
}
