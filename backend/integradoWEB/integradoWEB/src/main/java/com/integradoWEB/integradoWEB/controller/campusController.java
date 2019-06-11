/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.controller;

import com.integradoWEB.integradoWEB.models.campus;
import com.integradoWEB.integradoWEB.repository.campusRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/campus", produces="application/json;charset=UTF-8")
    public List<campus> listaCampus(){
            return campusRepo.findAll();
    }
}
