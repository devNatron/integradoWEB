/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.repository;

import com.integradoWEB.integradoWEB.models.curso;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Novaes
 */
public interface cursoRepository extends JpaRepository<curso, String>{
    
}
