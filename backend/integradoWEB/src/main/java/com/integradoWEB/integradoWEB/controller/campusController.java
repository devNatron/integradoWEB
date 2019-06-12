/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.controller;

import com.integradoWEB.integradoWEB.models.campus;
import com.integradoWEB.integradoWEB.repository.campusRepository;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Novaes
 */
@RestController
@RequestMapping(value="/api")
public class campusController {
    @Autowired
    campusRepository campusRepo;
    
    /* DEFINICAO DE ROTAS E CHAMADA DE FUNCOES NA DAO*/
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/ranquearCampi", consumes = "application/json", produces = "application/json")
    public List<campus> listaCursoModal(@RequestBody Map<String, Integer> payload){
        return campusRepo.ranquearCampi(payload.get("anoInicial"), payload.get("anoFinal"));
    }
}
