/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.repository;

import com.integradoWEB.integradoWEB.models.instituicao;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author Novaes
 */
public interface instituicaoRepository extends JpaRepository<instituicao, String>{
    
    @Query(
    value = "SELECT * FROM instituicao", 
    nativeQuery = true)
    List<instituicao> findAll();
    
}
